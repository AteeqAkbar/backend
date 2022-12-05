const config = require("../config/config");
const jwt = require("jsonwebtoken");
const db = require("../models/index.model");
const User = db.User;


const postRegister = async (req, res) => {
  try {
    const email = req.email;
    const password = req.password;
    const user = await User.findOne({
      where: {
        email: req.email,
      },
    });
    if (user) {
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


      return { user, ...{ accessToken } };
    }
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (userBody) => {
  const { email, password } = userBody; // getting value
  const user = await User.findOne({ where: { email: email } }); //find email
  if (user) {
    if ((password, user.password)) {
      const payload = { id: user.id, email: user.email };
      const accessToken = jwt.sign(payload, config.jwt.JWT_SECRET, {
        expiresIn: config.jwt.JWT_ACCESS_EXPIRATION_MINUTES,
      });
      return { user, ...{ accessToken } };
    } else {
      return 2;
    }
  } else {
    return false;
  }
};
const getUser = async (id) => {
  try {
    const singleUser = await User.findByPk(id);

    return singleUser;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  postRegister,
  loginUser,
  getUser,
};
