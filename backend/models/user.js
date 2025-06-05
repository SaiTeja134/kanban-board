const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  role: { type: String },
  fullName: { type: String },
  position: { type: String },
  department: { type: String },
  phoneNumber: { type: String }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
