const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema(
    {
        description: {
            type: String
        },
        category: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote;