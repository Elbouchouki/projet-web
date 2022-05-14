const { client } = require("../../../prisma/client");

class GetArticleUseCase {
  async execute(id) {
    const article = await client.article.findFirst({
      where: {
        id,
      },
    });
    return article;
  }
}
module.exports = { GetArticleUseCase };
