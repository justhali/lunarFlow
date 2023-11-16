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
    async getQuote(req, res){
        try {
            const {id} = req.params;
            const quote = await Quote.findById(id);
            res.status(200).json(quote)
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
    async updateQuote(req, res){
        try {
            const {id} = req.params;
            const quote = await Quote.findByIdAndUpdate(id, req.body);
            if(!quote){
                return res.status(404).json({message: `cannot find any quote with this ID ${id}`})
            }
            const updatedQuote = await Quote.findById(id)
            res.status(200).json(updatedQuote);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    async deleteQuote(req, res){
        try {
            const {id} = req.params;
            const quote = await Quote.findByIdAndDelete(id);
            if(!quote){
                return res.status(404).json({message: `cannot find any quote with this ID ${id}`})
            }
            res.status(200).json({message : `This quote with this ${quote.id} is successfully deleted`});
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

module.exports = new QuoteController();