const express = require('express');
const router = express.Router();

const quoteController = require('../../controllers/quoteController');



router.get('/quotes', quoteController.getQuotes)
router.get('/quote/:id', quoteController.getQuote)
router.put('/quote/:id', quoteController.updateQuote)
router.delete('/quote/:id', quoteController.deleteQuote)
router.post('/quote', quoteController.addQuote)

module.exports = router;