const { CreateArticleUseCase } = require("./CreateArticleUseCase");

class CreateArticleController {
  async handle(req, res, next) {
    const { titre, contenu, authorId, published } = req.body;
    const article = {
      titre: titre,
      contenu: contenu,
      image: req.file.filename,
      published: published,
      authorId: authorId,
    };
    const createArticleUseCase = new CreateArticleUseCase();
    const createdArticle = await createArticleUseCase.execute(article);
    console.log(createdArticle);
    res.json({
      article: createdArticle,
    });
  }
}

module.exports = { CreateArticleController };
