import "../components/lastestArticles";
import LatestArticles from "../components/lastestArticles";
export default class {
  constructor(props) {
    document.title = props.title;
  }
  async render() {
    return /*html*/ `
        <lastest-articles></lastest-articles>
        ${await new LatestArticles().render()}
        `;
  }
}
