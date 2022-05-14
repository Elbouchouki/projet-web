const express = require("express");
const router = express.Router();
const {
  AuthenticateUserUController,
} = require("./useCases/authenticateUser/AuthenticateUserController");
const {
  CreateUserController,
} = require("./useCases/createUser/CreateUserController");

const { ensureAuthenticated } = require("./middleware/ensureAuthenticated");
const {
  RefreshTokenUserController,
} = require("./useCases/refreshTokenUser/RefreshTokenUserController");

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserUController();
const refreshTokenUserController = new RefreshTokenUserController();

router.post("/user", ensureAuthenticated, createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refreshToken", refreshTokenUserController.handle);

// router.get("/test", (req, res) => {
//   const key = process.env.PRIVATE_SECRET;
//   console.log(key);
//   res.json({
//     key,
//   });
// });

module.exports = { router };
