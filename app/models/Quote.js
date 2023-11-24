const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
const quoteSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required : true
        },
        category: {
            type: String,
            required : true
        },
        mood_id : {
            type: ObjectId
        },
        phase_id : {
            type : ObjectId
        }
    },
    {
        timestamps: true
    }
)

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote;