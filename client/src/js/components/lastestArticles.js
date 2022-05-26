import { getArticles } from "../ApiCalls";
import { navigateTo } from "../routes";
import "./articleCard";
import ArticleCard from "./articleCard";
// New component
export default class LatestArticles {
  constructor() {
    this.articles = [];
  }
  async fetchArticles() {
    const articles = await getArticles(10, 0);
    this.articles = articles;
  }

  //   await new ArticleCard({ article }).render()
  async render() {
    await this.fetchArticles();
    let htmlArticles = "";
    for (const article of this.articles) {
      htmlArticles += await new ArticleCard({ article }).render();
    }
    return /*html*/ `
    <div id="lastestArticlesGrid" class="grid mt-10 grid-cols-1 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3">
        <div  class="my-4 col-span-full	 text-2xl font-bold dark:text-white">Latest Articles</div>
        ${htmlArticles}
    </div>`;
  }
}
