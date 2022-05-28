const authRouter = require("express").Router();
const {
  AuthenticateUserUController,
} = require("../useCases/authentication/authenticateUser/AuthenticateUserController");
const {
  RefreshTokenUserController,
} = require("../useCases/authentication/refreshTokenUser/RefreshTokenUserController");
const {
  RegisterUserController,
} = require("../useCases/authentication/registerUser/RegisterUserController");

const authenticateUserController = new AuthenticateUserUController();
const registerUserController = new RegisterUserController();
const refreshTokenUserController = new RefreshTokenUserController();

authRouter.post("/login", authenticateUserController.handle);
authRouter.post("/register", registerUserController.handle);
authRouter.post("/refreshToken", refreshTokenUserController.handle);

module.exports = { authRouter };
