const express = require('express');
const router = express.Router();
const quoteController = require('../app/controllers/quoteController');

app.use(express.json())


router.get('/quotes', quoteController.getQuotes)
router.get('/quotes/:id', quoteController.getQuote)
router.put('/quotes/:id', quoteController.updateQuote)
router.delete('/quotes/:id', quoteController.deleteQuote)
router.post('/quotes', quoteController.addQuote)
