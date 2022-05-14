const errorHandling = (err, req, res, next) => {
  var status = undefined;
  if (err.message == "User Already Exists") res.status(409);
  if (err.message == "User not found") res.status(404);
  if (err.message == "Email or Password incorrect") res.status(401);
  if (err.message == "Token is missing") res.status(401);
  if (err.message == "Token invalid") res.status(401);
  if (err.message == "Refresh token invalide") res.status(401);
  if (err.message == "Article Doesn't Exists") {
    status = "Not Found";
    res.status(404);
  }

  return res.json({ status: status ? status : "Error", message: err.message });
};

module.exports = { errorHandling };
