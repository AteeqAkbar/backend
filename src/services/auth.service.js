const config = require("../config/config");
const jwt = require("jsonwebtoken");
const db = require("../models/index.model");
const User = db.User;

try {
} catch (error) {}
const postRegister = async (req, res) => {
  try {
    const email = req.email;
    console.log("user name is " + email, req.password);
    const password = req.password;
    const user = await User.findOne({
      where: {
        email: req.email,
      },
    });
    if (user) {
      console.log("user is already exist");
      res.status(403).send("user is already exist");
    } else {
      const user = await User.create({
        email,
        password,
      });

      const payload = { email, id: user.id };

      const accessToken = jwt.sign(payload, config.jwt.JWT_SECRET, {
        expiresIn: config.jwt.JWT_ACCESS_EXPIRATION_MINUTES,
      });

      console.log(accessToken);

      return { user, ...{ accessToken } };
    }

    // return user;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  postRegister,
};
