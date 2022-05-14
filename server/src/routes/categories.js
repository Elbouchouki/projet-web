const {
  DeleteCategorieController,
} = require("../useCases/categories/deleteCategorie/DeleteCategorieController");
const {
  GetAllCategoriesController,
} = require("../useCases/categories/getAllCategories/GetAllCategoriesController");
const {
  GetCategorieController,
} = require("../useCases/categories/getCategorie/GetCategorieController");
const {
  UpdateCategorieController,
} = require("../useCases/categories/updateCategorie/UpdateCategorieController");

const categoriesRouter = require("express").Router();

const getAllCategoriesController = new GetAllCategoriesController();
const getCategorieController = new GetCategorieController();
const updateCategorieController = new UpdateCategorieController();
const deleteCategorieController = new DeleteCategorieController();

categoriesRouter.get("/", getAllCategoriesController.handle);
categoriesRouter.get("/:id", getCategorieController.handle);
categoriesRouter.patch("/", updateCategorieController.handle);
categoriesRouter.delete("/:id", deleteCategorieController.handle);

module.exports = { categoriesRouter };
