const Quote = require('../models/quoteModel');

class QuoteController {
    async addQuote(req, res){
        const{ description, category } = req.body;
        try {
            const newQuote = new Quote({description, category});
            await newQuote.save()
            res.status(201).json({message : 'New quote successfully added'})
        } catch (error) {
            console.error('Error', error);
            res.status(500).json({message: error.message})
        }
    }
}

module.exports = new QuoteController();