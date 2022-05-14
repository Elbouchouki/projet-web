const { GetUserUseCase } = require("./GetUserUseCase");

class GetUserController {
  async handle(req, res) {
    const { id } = req.params;
    const getUserUseCase = new GetUserUseCase();
    const user = await getUserUseCase.execute(id);
    if (!user) throw new Error("User not found");
    res.json({
      user,
    });
  }
}

module.exports = { GetUserController };
