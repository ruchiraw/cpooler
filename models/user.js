const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {type: String},
  email: {type: String, required: true},
  password: {type: String, required: true},
  address: {type: String},
  roles: {type: String, enum: ['passenger', 'driver', 'admin']},
  identityCard: {type: String},
  drivingLicense: {type: String}
})

const model = mongoose.model('User', UserSchema)

module.exports = model