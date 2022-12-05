const config = require("../config/config");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  jwt.verify(req.cookies.jwt, config.jwt.JWT_SECRET, function (err, decoded) {
    if (decoded) {
      res.locals.id = decoded.id;
      next();
    } else {
      res.send({ note: "Please Login First" });
    }
  });
};

module.exports = { auth };
