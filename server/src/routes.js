const express = require("express");
const {
  AuthenticateUserUController,
} = require("./useCases/authenticateUser/AuthenticateUserController");
const {
  CreateUserController,
} = require("./useCases/createUser/CreateUserController");

const router = express.Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserUController();

const { ensureAuthenticated } = require("./middleware/ensureAuthenticated");

router.post("/user", ensureAuthenticated, createUserController.handle);
router.post("/login", authenticateUserController.handle);

module.exports = { router };
