export default class {
  constructor(props) {
    document.title = props.title;
    console.log(props);
  }
  async render() {
    return /* HTML */ `
      <h1 class="text-3xl font-bold underlin">Categorie</h1>
    `;
  }
}
