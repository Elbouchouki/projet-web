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
  async reRenderPagination() {
    var htmlPagination = /* HTML */ ` <div>
      Showing
      <span class="font-semibold text-gray-900 dark:text-white"
        >${Math.min(AllArticles.articlesCount * 10, this.articles.length)}</span
      >
      of
      <span class="font-semibold text-gray-900 dark:text-white"
        >${this.articles.length}</span
      >
      Articles
    </div>`;
    return htmlPagination;
  }
  async reRender() {
    let htmlArticles = "";
    let max = (AllArticles.articlesCount + 1) * 10;
    if ((AllArticles.articlesCount + 1) * 10 > this.articles.length) {
      max = this.articles.length;
      $("#all-articles-pagination-button").attr("disabled", true);
      $("#all-articles-pagination-button").addClass("cursor-not-allowed");
    }
    for (var i = AllArticles.articlesCount * 10 || 1; i < max; i++) {
      htmlArticles += await new ArticleCard({
        article: this.articles[i],
      }).render();
    }
    AllArticles.articlesCount += 1;
    return htmlArticles;
  }

  async render() {
    await this.fetchArticles();
    AllArticles.articlesCount = 0;
    return /* HTML */ ` <div
      class="grid mt-10 grid-cols-1 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3"
    >
      <div class="my-4 col-span-full	 text-2xl font-bold dark:text-white">
        Articles
      </div>
      <div
        id="AllArticlesGridContainer"
        class="my-4 col-span-full grid mt-10 grid-cols-1 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3"
      >
        ${await this.reRender()}
      </div>
      <div class="mb-5 col-span-full flex flex-col items-center">
        <span
          id="all-articles-pagination"
          class="text-sm text-gray-700 dark:text-gray-400"
        >
          ${await this.reRenderPagination()}
        </span>
        <div class="inline-flex mt-2 xs:mt-0">
          <button
            id="all-articles-pagination-button"
            class="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Show More
          </button>
        </div>
      </div>
    </div>`;
  }
}

$(document).on("click", "#all-articles-pagination-button", async () => {
  const newHTML = await AllArticlesComponent.reRender();
  $("#AllArticlesGridContainer").append($(newHTML));
  const newPagination = await AllArticlesComponent.reRenderPagination();
  $("#all-articles-pagination").html($(newPagination));
  // console.log($("all-articles-pagination"));
});
