const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const userModel = require('../models/User');
const bcrypt = require('bcryptjs');

// Passport.js
passport.serializeUser(function (user, done) {
    done(null, user.id)
})

passport.deserializeUser(function (id, done) {
    userModel.findById(id, function (err, user) {
        done(err, user);
    })
});

passport.use(new localStrategy(function (email, password, done) {
    userModel.findOne({ email: email }, function (err, user) {
        if (err) return done(err); 
        if (!user) return done(null, false, { message: 'Incorrect email.' }); 

        bcrypt.compare(password, user.password, function (err, res) {
            if (err) return done(err);
            if (res === false) return done(null, false, {message: 'Incorrect password'});
            return done(null, user);
        })
    })
}))



module.exports = passport;