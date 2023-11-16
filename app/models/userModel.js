const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
        }, 
        password:{
            type: String,
            required: true
        },
        birth_date: {
            type: Date
        },
        last_period: {
            type: Date
        }, 
        pms: {
            type: Boolean
        }
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User;