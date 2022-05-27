import "../components/lastestArticles";
import LatestArticles from "../components/lastestArticles";
import ListCategories from "../components/listCategories";
export default class {
  constructor(props) {
    document.title = props.title;
  }
  async render() {
    return /* HTML */ `
      ${await new LatestArticles().render()}
      ${await new ListCategories().render()}
    `;
  }
}
