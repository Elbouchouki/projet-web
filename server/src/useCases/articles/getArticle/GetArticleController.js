const { GetArticleUseCase } = require("./GetArticleUseCase");

class GetArticleController {
  async handle(req, res) {
    const { id } = req.params;
    const getArticleUseCase = new GetArticleUseCase();
    const article = await getArticleUseCase.execute(parseInt(id));
    console.log(article);
    res.json({
      id: article.id,
      titre: article.titre,
      contenu: article.contenu,
      image: process.env.BASE_URL + "/ressources/" + article.image,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      published: article.published,
      authorId: article.authorId,
      categories: article.categories,
      author: article.author,
    });
  }
}
module.exports = { GetArticleController };
