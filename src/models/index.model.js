const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const db = {};
db.Task = require("../models/task.model")(sequelize, Sequelize);
db.User = require("../models/user.model")(sequelize, Sequelize);

module.exports = db;
