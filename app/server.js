require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT;
const dbPassword = process.env.DB_PASSWORD;
const quoteController = require('../app/controllers/quoteController');

app.use(express.json())

// ROUTES 
app.get('/quotes', quoteController.getQuotes)
app.get('/quotes/:id', quoteController.getQuote)
app.put('/quotes/:id', quoteController.updateQuote)
app.delete('/quotes/:id', quoteController.deleteQuote)
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