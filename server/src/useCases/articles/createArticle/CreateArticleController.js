const { CreateArticleUseCase } = require("./CreateArticleUseCase");

class CreateArticleController {
  async handle(req, res, next) {
    const { titre, contenu, authorId, published } = req.body;
    console.log(req);
    const article = {
      titre: titre,
      contenu: contenu,
      image: req.file.filename,
      published: published,
      authorId: authorId,
    };
    res.json(article);
    // const createArticleUseCase = new CreateArticleUseCase();
    // const createdArticle = await createArticleUseCase.execute(article);
    // res.json({
    //   article: createdArticle,
    // });
  }
}

module.exports = { CreateArticleController };
