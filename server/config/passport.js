var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');

passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
},
function(req, email, password, done) {
    //if (email) email = email.toLowerCase();

    // asynchronous
    process.nextTick(function() {
        User.findOne({ 'email' :  email }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.'));

            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

            // all is well, return user
            else{
                return done(null, user);
            }
                
        });
    });

}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});