const db = require("../models/index.model");
const Task = db.Task;

const createTask = async (req, res) => {
  try {
    const name = req.name;
    const user_id = res.locals.id;

    const task = await Task.create({
      name,
      user_id,
    });

    return { task };
  } catch (error) {
    console.log(error);
  }
};
const getTasks = async (req, res) => {
  try {
    const user_id = res.locals.id;

    const task = await Task.findAll({
      where: {
        user_id,
      },
    });
    return { task };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createTask,
  getTasks,
};
