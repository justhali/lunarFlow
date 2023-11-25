const mongoose = require('mongoose');

const phaseSchema = mongoose.Schema(
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

const Phase = mongoose.model('Phase', phaseSchema)

module.exports = Phase;