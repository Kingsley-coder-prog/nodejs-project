const mongoose = require('mongoose');
const validator = require('validator');

// name,email,photo,password,passwordConfirm
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ['true', 'Please tell us your name'],
    unique: true,
  },
  email: {
    type: String,
    required: ['true', 'Please provide your email address'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: ['true', 'Please provide a password'],
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: ['true', 'Please confirm your password'],
    validate: {
      // This only works on SAVE and CREATE
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
