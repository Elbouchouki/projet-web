const { client } = require("../../prisma/client");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

class AuthenticateUserUserCase {
  async execute({ email, password }) {
    const userAlreadyExists = await client.utilisateur.findFirst({
      where: {
        email,
      },
    });
    if (!userAlreadyExists) throw new Error("User not found");

    const passwordMath = await compare(password, userAlreadyExists.password);

    if (!passwordMath) throw new Error("Email or password incorrect");

    const token = sign({}, "Elbouchouki", {
      subject: userAlreadyExists.id,
      expiresIn: "30s",
    });

    return {
      user: {
        id: userAlreadyExists.id,
        nom: userAlreadyExists.nom,
        email: userAlreadyExists.email,
      },
      token,
    };
  }
}

module.exports = { AuthenticateUserUserCase };
