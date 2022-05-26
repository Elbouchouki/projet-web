import { getArticles } from "../ApiCalls";
import { AllArticlesComponent } from "../helper";
import { navigateTo } from "../routes";
import ArticleCard from "./articleCard";
// New component
export default class AllArticles {
  static articlesCount = 0;
  constructor() {
    this.articles = [];
  }
  async fetchArticles() {
    const articles = await getArticles();
    this.articles = articles;
  }

  async reRender() {
    let htmlArticles = "";

    for (
      var i = AllArticles.articlesCount;
      i < AllArticles.articlesCount * 10;
      i++
    ) {
      htmlArticles += await new ArticleCard({
        article: this.articles[i],
      }).render();
    }
    return htmlArticles;
  }

  async render() {
    await this.fetchArticles();
    return /*html*/ `
    <div class="grid mt-10 grid-cols-1 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3">
        <div  class="my-4 col-span-full	 text-2xl font-bold dark:text-white">Articles</div>
        <div id="AllArticlesGridContainer"  class="my-4 col-span-full grid mt-10 grid-cols-1 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3">
         ${await this.reRender()}
        </div>

    </div>`;
  }
}
