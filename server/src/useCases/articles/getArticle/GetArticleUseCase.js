const { client } = require("../../../prisma/client");

class GetArticleUseCase {
  async execute(id) {
    const article = await client.article.findFirst({
      where: {
        id,
      },
      include: {
        categories: {
          include: {
            categorie: {
              select: {
                nom: true,
              },
            },
          },
        },
        author: {
          select: {
            id: true,
            nom: true,
            email: true,
            role: true,
          },
        },
        commentaire: {
          select: {
            id: true,
            email: true,
            contenu: true,
          },
        },
      },
    });
    return article;
  }
}
module.exports = { GetArticleUseCase };
