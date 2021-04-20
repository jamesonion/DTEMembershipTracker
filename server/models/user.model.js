const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/* 
  This file contains the schema for the users database. Each schema has
  a variet of validators and regular expressions to ensure their values.
  Password Regex Requirements:
    - At least 8 characters long, max length anything
    - Include at least 1 lowercase letter
    - 1 capital letter
    - 1 number
    - 1 special character => !@#$%^&*-.
*/

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'User email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    },
  },
  first_name: {
    type: String,
    required: [true, 'User first_name is required'],
    unique: false,
    trim: true,
    minlength: 2,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[A-Za-z]+([-'][A-Za-z]+)?$/.test(v);
      },
      message: props => `${props.value} is not a valid first name!`
    },
  },
  last_name: {
    type: String,
    required: [true, 'User last_name is required'],
    unique: false,
    trim: true,
    minlength: 2,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[A-Za-z]+([-'][A-Za-z]+)?$/.test(v);
      },
      message: props => `${props.value} is not a valid first name!`
    },
  },
  password: {
    type: String,
    required: [true, 'User password is required'],
    unique: false,
    validate: {
      validator: function(v) {
        console.log(v)
        return /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*-.])[\w!@#$%^&*-.]{8,}$/.test(v);
      },
      message: `Password does not meet minimum requirements!`                                          
    },
  },
  points: {
    type: Number,
    required: false,
    unique: false,
    default: 0
  },
}, {
  timestamps: true,
});


/* TODO -- need to decrypt password (do this in users.js)*/
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


const User = mongoose.model('User', userSchema);
module.exports = User;