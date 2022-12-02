const authService = require("../services/auth.service");
//user creation
const postRegister = async (req, res) => {
  console.log(req.body, ">>>>>>>>>>><<<<<<<<<<<<<<>");
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

module.exports = {
  postRegister,
};
