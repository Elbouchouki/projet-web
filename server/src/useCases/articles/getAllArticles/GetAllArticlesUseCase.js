const { client } = require("../../../prisma/client");

class GetAllArticlesUseCase {
  async execute() {
    const articles = await client.article.findMany({});
    return articles;
  }
}
module.exports = { GetAllArticlesUseCase };
