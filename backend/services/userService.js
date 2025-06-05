const User = require('../models/user');

const getAllUsers = async () => {
  return await User.find();
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const getUserByUsername = async (username) => {
  return await User.findOne({ username });
};

const registerUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const updateUser = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByUsername,
  registerUser,
  updateUser,
  deleteUser
};
