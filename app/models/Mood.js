const mongoose = require('mongoose');

const moodSchema = mongoose.Schema(
    {
        img: {
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

const Mood = mongoose.model('Mood', moodSchema)

module.exports = Mood;