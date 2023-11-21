const express = require('express');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const router = express.Router();
const authController = require('../../controllers/authController')

router.get('/login', authController.login);
router.get('/logout', authController.logout);

// Redirection when logged but doesn't work. Need to try later when front is connected
// router.post('/login/password', passport.authenticate('local', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/login?error=true'
// }));

module.exports = router; 