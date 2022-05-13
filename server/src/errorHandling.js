const errorHandling = (err, req, res, next) => {
  if (err.message == "User already exists") res.status(409);
  if (err.message == "User not found") res.status(404);
  if (err.message == "Email or Password incorrect") res.status(401);
  if (err.message == "Token is missing") res.status(401);
  if (err.message == "Token invalid") res.status(401);
  return res.json({ status: "Error", message: err.message });
};

module.exports = { errorHandling };
