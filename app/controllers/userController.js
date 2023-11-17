const User = require('../models/User'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
class UserController {
    async register(req, res){
        try {
            const { name, email, password, birth_date, last_period, pms } = req.body;
            console.log(req.body)

            const existingUser = await User.findOne({email})

            if(existingUser){
                throw new Error('User already exists')
            }
            
            const newUser = new User({name, email, password, birth_date, last_period, pms});
            await newUser.save()
            
            // const salt = await bcrypt.genSalt(10);
            // newUser.password = await bcrypt.hash(password, salt);

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

module.exports = new UserController();

