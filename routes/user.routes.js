const express = require('express')
const router = express.Router()
const user = require('../models/user.model')
const validators = require('../utils/validators')

/* All Users */
router.get('/', async (req, res) => {
    await user.getUsers()
    .then(users => res.status(200).json(users))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* A user by FirstName */
router.get('/firstname/:firstname', async (req, res) => {
    await user.getUser(req.params.firstname)
    .then(user => res.json(user))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* Create a new user */
router.post('/', validators.validateFields, async (req, res) => {
    await user.createUser(req.body)
    .then(user => res.status(201).json({
        message: `User successfully created!`,
        //content: user   //Uncomment if wanted to show the newly created User
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

module.exports = router