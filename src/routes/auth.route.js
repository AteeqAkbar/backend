const express = require("express");
const authController = require("../controllers/auth.controller");
const { auth } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(authController.postRegister);

router.route("/login").post(authController.loginUser);

router.route("/user").get(auth, authController.getUser);

module.exports = router;
