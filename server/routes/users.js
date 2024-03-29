const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require("../models/user.model")
var passport = require("passport");

/*
    This file contains all the routes related to the users database.
    Each route is prefaced with a comment that shows how to test that specific  
    route in Postman. Anything  wrapped in "<>" needs to be replaced with a literal
    value.
*/

// Route: Retrieve all users
// "GET http://localhost:5000/users/"
router.route('/').get((req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
// Route: Add a user
/*
http://localhost:5000/users/add
In body select raw and json and enter:
{
    "email": "<email>",
    "first_name": "<first name>",
    "last_name": "<last name>",
    "password": "<password>"
*/
router.route('/add').post((req, res) => {

    const newUser = new User({
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        points: 0
    });
  
    // Hash the password TODO
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
       if (err) throw err;
        newUser.password = hash;

    // Save user to database
        newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
      });
   });
});

// Route: Get a user by id
// "GET http://localhost:5000/users/<id>" 
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// Route: Delete a user by id
// "DELETE http://localhost:5000/users/<id>"
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json('User deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// Route: Update a user by id
// "POST http://localhost:5000/users/update/<id>"
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.email = req.body.email;
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
    // TODO -- need to decrypt password (do this in users.js)
            
        if(!user.validPassword(req.body.password)){
          user.password = req.body.password;

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
             if (err) throw err;
              user.password = hash;
            });
          });
        }

        user.save()
          .then(() => res.json('User updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});
  

//Route: Sign in a user once they've input email and password
router.route('/login').post(function(req, res, next){
  passport.authenticate('local-login',function(err, user, info) {
  if (err) { return next(err); }
  // Redirect if it fails
  if (!user) { 
    return res.send({ success : false, message : 'signin failed' });}
  req.logIn(user, function(err) {
    if (err) { return next(err); }
    // Redirect if it succeeds
    return res.send({ success : true, message : 'signin succeeded' });
  });
})(req, res, next)});
  
  module.exports = router;