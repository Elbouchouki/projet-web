import { AllArticlesComponent } from "../helper";

export default class {
  constructor(props) {
    document.title = props.title;
  }
  async render() {
    return /* HTML */ ` <div>${await AllArticlesComponent.render()}</div> `;
  }
}
