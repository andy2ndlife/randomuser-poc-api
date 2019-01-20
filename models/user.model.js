const request = require('request-promise');
const externalAPI = 'https://randomuser.me/api'

users = []

function getUsers() {
    return new Promise((resolve, reject) => {
        var promises = [];
        for (let i=0; i<10; i++) {
            promises.push(request(externalAPI));
        }

        Promise.all(promises).then(results => {
            for(var result of results) {
                const { gender, email, cell, name , location } = JSON.parse(result)['results'][0];
                users.push({
                    'gender' : gender,
                    'firstname': name['first'],
                    'city': location['city'],
                    'email': email,
                    'cell': cell
                })
            }
        })
        .then(() => {
            resolve(users)
        })
        .catch((err)=> {
            reject(
                {
                    message: 'Error in parsing response!',
                    status: 404
                }
            )
        })
    })
}

function getUser(firstName) {
    return new Promise((resolve, reject) => {
        const user = users.find(usr => usr.firstname === firstName)
        if(!user) {
            reject({
                message: 'User not found!',
                status: 404
            })
        }
        resolve (user)
    })
}

function createUser(newUser) {
    return new Promise((resolve, reject) => {
        newUser = {...newUser}
        users.push(newUser)
        resolve(newUser)
    })
}

module.exports = {
    getUsers,
    getUser,
    createUser
}