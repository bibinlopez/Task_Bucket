const Task = require('../models/task');

const getAllTasks = (req, res) => {
   res.send('get all task');
};


const createTask = async (req, res) => {
   try {
      const task = new Task(req.body);
      const result = await task.save();
      res.status(201).json({ result });
   } catch (error) {
      res.status(500).json({msg:error})
   }
};


const getTask = (req, res) => {
   res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
   res.send('update task');
};

const deleteTask = (req, res) => {
   res.send('delete task');
};


module.exports = {
   getAllTasks, createTask, getTask, updateTask, deleteTask
};