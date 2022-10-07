const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./database/connect.tsx');
const port = process.env.PORT || 10000;
const app = express();
const { auth, requiresAuth } = require('express-openid-connect');


require("dotenv").config();
// use .env file to store sensitive data    
require('dotenv').config();
const axios = require('axios');
const { Code } = require('mongodb');
// store the client id in a variable
app.use(express.json());


const github_oath = 'https://github.com/login/oauth/authorize?client_id=';

let code = "";


app.get('/oauth-callback', async (request, response) => {
     code = request.query.code;
    

    const body = {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
    };
    await axios.post('https://github.com/login/oauth/access_token', body, Option).then(resp => resp.data.access_token).then(access_token => {
        if (!access_token) {
            return response.status(401).json({
                message: 'Unauthorized'
                });
        } 
        return response.redirect('https://realtorzone.onrender.com/api-docs' + access_token);

    });

    response.send();
});

app.get('/auth', (request, response) => {
    response.redirect(github_oath + process.env.GITHUB_CLIENT_ID);
});
app.get('/loggedin', async (request, response) => {
    const access_token = request.query.access_token;
    console.log(access_token + "access token");


    const data = await axios({
        method: 'get',
        url: 'https://api.github.com/user',
        headers: {
            Authorization: 'token ' + access_token
        }
    }).then(res => {
        return {
            status: res.status,
            message: res.statusText,
            data: res.data
        };
    }).catch(err => {
        return {
            status: err.response.status,
            message: err.message
        };
    });

    response.status(data.status).send(data);
});
// log the user out by removing the token from the session
app.get('/logout', (request, response) => {
    request.session = null;
    response.redirect('/');
    
});

    
app.use(bodyParser.json()).use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
}).use('/',require('./routes/index.tsx'));



mongodb.initDatabase((error,mongodb) => {
    if(error) {
        console.log(error);
    }else {
        app.listen(port) 
            console.log('Server started on port: ' + port);
     
    }
});




