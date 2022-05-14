const { client } = require("../../../prisma/client");

class DeleteArticleUseCase {
  async execute(articleId) {
    await client.article.delete({
      where: {
        id: articleId,
      },
    });
  }
}
module.exports = { DeleteArticleUseCase };
