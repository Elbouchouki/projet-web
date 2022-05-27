import { navigateTo, router } from "../routes";
import "./articleCard";
import CategorieCard from "./categorieCard";
import { getCategories } from "../ApiCalls";
// New component
export default class ListCategories {
  constructor() {
    this.categories = [];
  }
  async fetchCategories() {
    const categories = await getCategories();
    this.categories = categories;
  }

  //   await new ArticleCard({ article }).render()
  async render() {
    await this.fetchCategories();
    let htmlCategories = "";
    for (const categorie of this.categories) {
      htmlCategories += await new CategorieCard({ categorie }).render();
    }

    $(document).on("click", ".catBtn", function (e) {
      e.preventDefault();
      const link = e.target.href;
      if (link) {
        history.pushState("", "", e.target.href);
        router();
      }
    });

    $(document).on("click", ".catBtnParg ", function (e) {
      $(e.target).parent().trigger("click");
    });

    return /* HTML */ ` <div
      id="lastestArticlesGrid"
      class="grid mt-10 grid-cols-2 gap-5 mx-10 place-items-center md:grid-cols-3 lg:grid-cols-4"
    >
      <div class="my-4 col-span-full	 text-2xl font-bold dark:text-white">
        Categories
      </div>
      ${htmlCategories}
    </div>`;
  }
}
