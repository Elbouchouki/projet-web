import ArticleCategorie from "../components/articleCategorie";

export default class {
  constructor(props) {
    document.title = props.title;
    this.id = props.id;
  }
  async render() {
    return /* HTML */ `
      <div class="flex justify-center">
        ${await new ArticleCategorie(this.id).render()}
      </div>
    `;
  }
}
