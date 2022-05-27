import "../components/registerForm";
export default class {
  constructor(props) {
    document.title = props.title;
  }
  async render() {
    return /* HTML */ `
      <div class="flex items-center justify-center min-h-full ">
        <register-form></register-form>
      </div>
    `;
  }
}
