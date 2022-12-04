const express = require("express");
const taskController = require("../controllers/task.controller");
const { auth } = require("../middlewares/auth");

const router = express.Router();

router.route("/create-task").post(auth, taskController.createTask);

router.route("/list-tasks").get(auth,taskController.getTasks);

module.exports = router;
