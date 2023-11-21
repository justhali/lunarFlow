const User = require('../models/User'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

class UserController {
    async register(req, res){
        try {
            const { name, email, password, birth_date, last_period, pms } = req.body;

            // Vérifier si l'utilisateur existe
            const existingUser = await User.findOne({email})

            if(existingUser){
                throw new Error('User already exists')
            }
            
            // Hasher le mot de passe
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Créer un nouvel utilisateur avec le mot de passe hashé
            const newUser = new User({name, email, password: hashedPassword, birth_date, last_period, pms});

            // Sauvegarder l'utilisateur dans la base de données
            await newUser.save();
            
            const payload = {
                user: {
                    id: newUser.id,
                },
            };

            // Supprimer le mot de passe de User avant de l'envoyer en réponse
            delete newUser._doc.password;

            // Créer et envoyer le token JWT
            jwt.sign(
                payload,
                process.env.APP_SECRET,
                {
                    expiresIn: 360000,
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({ token, newUser });
                }
            );

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

module.exports = new UserController();
