const {
  DeleteArticleController,
} = require("../useCases/articles/deleteArticle /DeleteArticleController");
const {
  GetAllArticlesController,
} = require("../useCases/articles/getAllArticles/GetAllArticlesController");
const {
  GetArticleController,
} = require("../useCases/articles/getArticle/GetArticleController");
const {
  UpdateArticleController,
} = require("../useCases/articles/updateArticle/UpdateArticleController");

const articlesRouter = require("express").Router();

const getAllArticlesController = new GetAllArticlesController();
const getArticleController = new GetArticleController();
const updateArticleController = new UpdateArticleController();
const deleteArticleController = new DeleteArticleController();

articlesRouter.get("/", getAllArticlesController.handle);
articlesRouter.get("/:id", getArticleController.handle);
articlesRouter.patch("/", updateArticleController.handle);
articlesRouter.delete("/:id", deleteArticleController.handle);

module.exports = { articlesRouter };
