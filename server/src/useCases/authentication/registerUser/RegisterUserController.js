const { RegisterUserUseCase } = require("./RegisterUserUseCase");

class RegisterUserController {
  async handle(request, response) {
    const { nom, email, password } = request.body;

    const registerUserUseCase = new RegisterUserUseCase();

    const user = await registerUserUseCase.execute({
      nom,
      email,
      password,
    });

    return response.json(user);
  }
}

module.exports = { RegisterUserController };
