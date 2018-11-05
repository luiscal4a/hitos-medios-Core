'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	email: { type: String, unique: true, lowercase: true},
	name: String,
	password: { type: String, select: false},
  category: {type: String, enum: ['admin', 'user', 'userPlus']},
	signupDate: { type: Date, default: Date.now()}
})


module.exports = mongoose.model('User', UserSchema)