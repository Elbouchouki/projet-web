import { navigateTo } from "../routes";

// New component
export default class CategorieCard {
  constructor(props) {
    this.categorie = props.categorie;
  }

  async render() {
    return /* HTML */ `
      <a
        href="/categories/${this.categorie.id}"
        class="catBtn w-full block mb-5 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <p
          class="catBtnParg text-md font-bold tracking-tight text-gray-900 dark:text-white"
        >
          ${this.categorie.nom.toUpperCase()}
          (${this.categorie._count.Articles})
        </p>
      </a>
    `;
  }
}
