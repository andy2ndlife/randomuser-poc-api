Make sure you have Node and NPM installed both with `node -v && npm -v`.  
Install packages with `npm install`.  
Run server with `npm run dev` for using **Nodemon**

If you use a Node version ≤ 8.2.1, you will need to add the " - harmony" flag for using spread operator in the package.json file.

`"dev": "node_modules/.bin/nodemon --harmony -e js",`

The API is configured to run on localhost:3000
**ENDPOINTS**
1. GET http://localhost:3000/users
2. GET http://localhost:3000/users/firstname/{{firstName}}
3. POST http://localhost:3000/users/

    *JSON request-body*
    ```
    {
        "gender": "male",
        "firstname": "TEST FIRST NAME",
        "city": "TEST CITY",
        "email": "test.test@example.com",
        "cell": "(420)-255-3320"
    }

Import the request template `request-templat/RandomUser.postman_collection.json` in Postman or similar to test the endpoints
