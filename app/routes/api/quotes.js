const express = require('express');
const router = express.Router();

const quoteController = require('../../controllers/quoteController');



router.get('/quotes', quoteController.getQuotes)
router.get('/quotes/:id', quoteController.getQuote)
router.put('/quotes/:id', quoteController.updateQuote)
router.delete('/quotes/:id', quoteController.deleteQuote)
router.post('/quotes', quoteController.addQuote)

module.exports = router;