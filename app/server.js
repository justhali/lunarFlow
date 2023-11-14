const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const dbPassword  = process.env.DB_PASSWORD; 
const quoteController = require('../app/controllers/quoteController');

require('dotenv').config();
app.use(express.json())

// ROUTES 
app.get('/quotes', quoteController.getQuotes)
app.post('/quotes', quoteController.addQuote)

mongoose
    .connect(`mongodb+srv://french_sisters:${dbPassword}@hackathon.wrlpzyf.mongodb.net/LunaFlowAPI?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Connected to MongoDb')
        app.listen(port, () => {
            console.log(`Server is running on port http://localhost:${port}`)
        })
    }).catch((error) => {
        console.log(error)
    })