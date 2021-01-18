"use strict"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const teamsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false
  },
  country: {
    type: String,
    required: true,
    unique: false
  },
  league: {
    type: String,
    required: true,
    unique: false
  },
  userId: {
    type: ObjectId,
    ref: 'user',
    required: true
  },
  players: [
    {
      playerName: {
        type: String
      },
      playerNumber: {
        type: String
      }
    }
  ]
}, { timestamps: { currentTime: () => new Date().getTime() } });


module.exports = mongoose.model('team', teamsSchema, 'teams');