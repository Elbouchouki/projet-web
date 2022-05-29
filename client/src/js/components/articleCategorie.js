import { getCategorie } from "../ApiCalls";
import { router } from "../routes";

// New component
export default class ArticleCategorie {
  constructor(id) {
    this.id = id;
    this.articles = [];
    this.catName = "";
  }
  async fetchCategorie() {
    const categorieArticle = await getCategorie(this.id);
    this.articles = categorieArticle.Articles;
    this.catName = categorieArticle.nom;
  }

  async render() {
    await this.fetchCategorie();
    const articles = (id, title, contenu) => {
      return /* HTML */ `<div
        class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
      >
        <h1
          class="text-2xl font-semibold text-gray-700 capitalize dark:text-white"
        >
          ${title}
        </h1>

        <p class="text-gray-500 dark:text-gray-300">
          ${contenu.slice(0, 100) + "..."}
        </p>

        <a
          href="/articles/${id}"
          class="artRedirect inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="artRedirect-child w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </div>`;
    };
    var categoriesHTML = "";
    await this.articles.map((article) => {
      categoriesHTML += articles(
        article?.article?.id,
        article?.article?.titre,
        article?.article?.contenu
      );
    });
    return /* HTML */ `
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1
            class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"
          >
            Articles of <br />
            Categorie
            <span class="underline decoration-blue-500"
              >${this.catName[0].toUpperCase() +
              this.catName.slice(1, this.catName.length).toLowerCase()}</span
            >
          </h1>

          <div
            class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3"
          >
            ${categoriesHTML}
          </div>
        </div>
      </section>
    `;
  }
}
$(document).on("click", ".artRedirect", (e) => {
  e.preventDefault();
  if (e.target.href) {
    history.pushState("", "", e.target.href);
    router();
  }
  return;
});
$(document).on("click", ".artRedirect-child", (e) => {
  e.preventDefault();
  $(e.target).parent().click();
});
