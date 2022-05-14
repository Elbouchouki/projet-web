const { client } = require("../../../prisma/client");

class GetAllCommentairesUseCase {
  async execute() {
    const commentaires = await client.article.findMany({});
    return commentaires;
  }
}
module.exports = { GetAllCommentairesUseCase };
