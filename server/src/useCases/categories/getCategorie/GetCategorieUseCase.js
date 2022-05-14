const { client } = require("../../../prisma/client");

class GetCategorieUseCase {
  async execute(id) {
    const categorie = await client.categorie.findFirst({
      where: {
        id,
      },
    });
    return categorie;
  }
}
module.exports = { GetCategorieUseCase };
