const Task = require('../models/task');

const getAllTasks = async () => {
  return await Task.find();
};

const getTaskById = async (id) => {
  return await Task.findById(id);
};

const createTask = async (taskData) => {
  const task = new Task(taskData);
  return await task.save();
};

const updateTaskStatus = async (id, status) => {
  return await Task.findByIdAndUpdate(id, { status }, { new: true });
};

const updateTask = async (id, updatedData) => {
  return await Task.findByIdAndUpdate(id, updatedData, { new: true });
};

const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskStatus,
  updateTask,
  deleteTask
};
