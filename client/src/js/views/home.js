import "../components/header.js";

export default class {
  constructor(props) {
    document.title = props.title;
  }
  async render() {
    return /*html*/ `
        
        <h1 class="text-3xl font-bold underlin">
          Hello world!
        </h1>
        <p>Simple click counter</p>
        `;
  }
}
