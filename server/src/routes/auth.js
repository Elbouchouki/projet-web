const authRouter = require("express").Router();
const {
  AuthenticateUserUController,
} = require("../useCases/authenticateUser/AuthenticateUserController");
const {
  RefreshTokenUserController,
} = require("../useCases/refreshTokenUser/RefreshTokenUserController");

const authenticateUserController = new AuthenticateUserUController();
const refreshTokenUserController = new RefreshTokenUserController();

authRouter.post("/login", authenticateUserController.handle);
authRouter.post("/refreshToken", refreshTokenUserController.handle);

module.exports = { authRouter };
