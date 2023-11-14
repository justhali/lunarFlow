const Quote = require('../models/quoteModel');

class QuoteController {
    async getQuotes(req, res){
        try {
            const quotes = await Quote.find({});
            res.status(200).json(quotes)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    async addQuote(req, res){
        const{ description, category } = req.body;
        try {
            const newQuote = new Quote({description, category});
            await newQuote.save()
            res.status(201).json({message : 'New quote successfully added'})
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

module.exports = new QuoteController();