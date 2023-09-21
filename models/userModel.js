const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model('User', userSchema);
// console.log(message);

module.exports = User;
