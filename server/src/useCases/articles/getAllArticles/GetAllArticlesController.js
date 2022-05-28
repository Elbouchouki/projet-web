const { GetAllArticlesUseCase } = require("./GetAllArticlesUseCase");

class GetAllArticlesController {
  async handle(req, res) {
    const { skip, take } = req.query;
    const getAllArticlesUseCase = new GetAllArticlesUseCase();

    const skipping = skip && parseInt(skip) > 0 ? parseInt(skip) : 0;
    const taking = take && parseInt(take) > 0 ? parseInt(take) : 0;

    var articles = await getAllArticlesUseCase.execute();

    if (skipping)
      articles = articles.slice(skipping, skipping + articles.length);
    if (taking) articles = articles.slice(0, taking);
    articles = articles.map((article) => {
      article.image = process.env.BASE_URL + "/ressources/" + article.image;
      return article;
    });
    res.json({ articles });
  }
}
module.exports = { GetAllArticlesController };
