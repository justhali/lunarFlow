const express = require('express');
const quoteController = require('../controllers/quoteController');

app.use(express.json())

router.get('/', console.log("Hello World"))
router.post('/quotes', quoteController.addQuote)