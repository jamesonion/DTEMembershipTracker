// This file handles all of the routing for user signup functionality.

import User, { find } from '../models/User.js';

export default (app) => {

  app.post('/', (req, res, next) => {
    console.log("in signup")
    // Get the email and password from the request body
    const { body } = req;
    const { password } = body;
    let {email} = body;
    
    if (!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }    
    
    email = email.toLowerCase();
    email = email.trim();    
    
    // Verify that there is not already a user with the email address
    find({
      email: email
    }, (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exist.'
        });
      }      
      
      // Save the new user
      const newUser = new User();      
      newUser.email = email;
      newUser.password = newUser.generateHash(password);

      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: Server error'
          });
        }
        return res.send({
          success: true,
          message: 'Signed up'
        });
      });
    });  

    });
};

