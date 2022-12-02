const express = require("express");
const authRoute = require("./auth.route");
const taskRoute = require("./task.route");

const router = express.Router();
//the purpose of creating index.js is that we can create varity of routes in a single file without messup
const routes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/task",
    route: taskRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
