const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        // Authentication ID
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required:[true, "Please provide a unique email"],
            unique: true            
        }, 
        password:{
            type: String,
            required:[ true, "Please provide a password"],
            unique: true
        },
        birth_date: {
            type: Date
        },
        last_period: {
            type: Date
        }, 
        pms: {
            type: Boolean
        },
        createdAt:{
            type: Date,
            default: Date.now
        }
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User;