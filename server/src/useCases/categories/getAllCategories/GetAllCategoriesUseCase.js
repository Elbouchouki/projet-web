const { client } = require("../../../prisma/client");

class GetAllCategoriesUseCase {
  async execute() {
    const categories = await client.categorie.findMany({});
    return categories;
  }
}
module.exports = { GetAllCategoriesUseCase };
