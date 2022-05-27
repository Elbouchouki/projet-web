import ListCategories from "../components/listCategories";

export default class {
  constructor(props) {
    document.title = props.title;
  }
  async render() {
    return /* HTML */ ` ${await new ListCategories().render()} `;
  }
}
