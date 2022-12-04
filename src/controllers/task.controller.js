const taskService = require("../services/task.service");
//task creation
const createTask = async (req, res) => {
  const task = await taskService.createTask(req.body, res);
  if (!task) {
    res.status(404).send("Not Found");
  } else {
    res.status(200).json({
      status: true,
      task: {
        id: task.task.id,
        name: task.task.name,
      },
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const task = await taskService.getTasks(req, res);
    if (!task) {
      res.status(404).send("Not Found");
    } else {
      res.status(200).json({
        status: true,
        tasks: task,
      });
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  createTask,
  getTasks,
};
