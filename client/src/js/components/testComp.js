export default class testComp {
  constructor() {
    this.text = "LOL";
  }
  async render() {
    return `<div> ${this.text} </div>`;
  }
}
