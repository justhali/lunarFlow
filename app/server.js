const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const port = 3000;
const dbPassword  = process.env.DB_PASSWORD; 

const app = express();


mongoose
    .connect(`mongodb+srv://french_sisters:${dbPassword}@hackathon.wrlpzyf.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Connected to MongoDb')
        app.listen(port, () => {
            console.log(`Server starts on port http://localhost:${port}`)
        })
    }).catch((error) => {
        console.log(error)
    })