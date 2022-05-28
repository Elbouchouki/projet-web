import Article from "../components/article";

export default class {
  constructor(props) {
    document.title = props.title;
    this.id = props.id;
  }
  async render() {
    return /* HTML */ `
      <div class=" flex justify-center">
        ${await new Article(this.id).render()}
      </div>
    `;
  }
}
