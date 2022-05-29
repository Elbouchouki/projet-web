import { getArticle } from "../ApiCalls";

// New component
export default class Article {
  constructor(id) {
    this.id = id;
    this.article = null;
  }
  async fetchArticle() {
    const article = await getArticle(this.id);
    this.article = article;
  }

  async render() {
    await this.fetchArticle();
    const colors = ["yellow", "green", "indigo", "pink", "red", "gray", "blue"];
    const categorie = (catName) => {
      const col = colors[Math.floor(Math.random() * colors.length)];
      return `<span class="bg-${col}-100 text-yel${col}low-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-${col}-200 dark:text-${col}-900">${catName}</span>`;
    };
    var categoriesHTML = "";
    await this.article?.categories?.map((cat) => {
      categoriesHTML += `${categorie(
        cat?.categorie?.nom[0]?.toUpperCase() +
          cat?.categorie?.nom?.slice(1, cat?.categorie?.nom?.length)
      )}`;
    });

    return /* HTML */ `
      <section
        class="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:flex-col lg:justify-center"
      >
        <div
          class="bg-white dark:bg-gray-800 lg:mx-8 lg:flex  lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
        >
          <div class="lg:w-1/2">
            <div
              class="h-80 bg-cover lg:rounded-lg lg:h-full"
              style="background-image:url('${this.article?.image}')"
            ></div>
          </div>

          <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2
              class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"
            >
              ${this.article?.titre}
              <span class="text-blue-600 dark:text-blue-400"
                >by
                ${this.article?.author?.nom[0].toUpperCase() +
                this.article?.author?.nom.slice(
                  1,
                  this.article?.author?.nom.length
                )}</span
              >
            </h2>
            <p class="mt-4 text-gray-600 dark:text-gray-400">
              Last Update : ${this.article?.createdAt?.slice(0, 10)}
            </p>
            <p class="mt-4 text-gray-600 dark:text-gray-400">
              Created : ${this.article?.updatedAt?.slice(0, 10)}
            </p>

            <div class="mt-8">${categoriesHTML}</div>
          </div>
        </div>
        <div
          class="bg-white lg:mt-5 mb-10 px-6 py-12 dark:bg-gray-800 lg:mx-8 lg:flex  lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
        >
          <p class="mt-4 dark:text-gray-100">${this.article?.contenu}</p>
        </div>
      </section>
    `;
  }
}
