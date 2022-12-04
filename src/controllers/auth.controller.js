const authService = require("../services/auth.service");
//user creation
const postRegister = async (req, res) => {
  const user = await authService.postRegister(req.body, res);
  if (!user) {
    res.status(404).send("Not Found");
  } else {
    const tokenAge = 2 * 24 * 60 * 60 * 1000;
    res.cookie("jwt", user.accessToken, {
      httpOnly: true,
      maxAge: tokenAge,
    });
    res.status(200).json({
      status: true,
      user: {
        email: user.user.email,
        id: user.user.id,
      },
    });
  }
};

//this login controller for user
const loginUser = async (req, res) => {
  const user = await authService.loginUser(req.body);

  if (!user) {
    res.status(404).send("Not Found");
  } else if (user === 2) {
    res.json({
      status: 401,
    });
  } else {
    const tokenAge = 2 * 24 * 60 * 60 * 1000;
    res.cookie("jwt", user.accessToken, {
      httpOnly: true,
      maxAge: tokenAge,
    });
    res.json({
      status: 200,
      user: {
        jwt: user.accessToken,
      },
    });
  }
};
const getUser = async (req, res) => {
  try {
    const user_id = res.locals.id;
    const user = await authService.getUser(user_id);

    if (!user) {
      res.status(404).send("Not Found");
    } else {
      res.json({
        status: 200,
        user: {
          id: user.id,
          email: user.email,
        },
      });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  postRegister,
  loginUser,
  getUser,
};
