const { verify } = require("jsonwebtoken");

const ensureAuthenticated = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new Error("Token is missing");
  }

  const [, token] = authToken.split(" ");

  const isValid = verify(token, "Elbouchouki");
  if (!isValid) throw new Error("Token invalid");

  return next();
};

module.exports = { ensureAuthenticated };
