"use strict"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: false
  },
  address: {
    streetName: {
      type: String
    },
    streetNumber: {
      type: String
    },
    city: {
      type: String
    }
  }
}, { timestamps: { currentTime: () => new Date().getTime() } });


module.exports = mongoose.model('user', userSchema, 'users');