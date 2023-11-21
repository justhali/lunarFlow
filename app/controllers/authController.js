const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const passport = require('../auth/auth');

class authController{
    async login(req, res) {
        try {
            const { email, password } = req.body;

            // Vérifier si l'utilisateur existe
            const user = await User.findOne({ email });

            if (!user) {
                throw new Error('Not good');
            }

            // Vérifier si le mot de passe correspond
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                throw new Error('Not that good');
            }

            const payload = {
                user: {
                    id: user.id,
                },
            };

            const userWithoutPassword = { ...user._doc };
            delete userWithoutPassword.password;

            jwt.sign(
                payload,
                process.env.APP_SECRET,
                {
                    expiresIn: 360000,
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({ token, user });
                }
            );

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async logout(req, res) {
        req.logout();
        res.status(200).json({ message: 'Successfully logged out' });
    }

    // // Middleware to check if the user is authenticated
    // async isLoggedIn(req, res, next) {
    //     if (req.isAuthenticated()) return next();
    //     res.redirect('/login');
    // }


}

module.exports = new authController();