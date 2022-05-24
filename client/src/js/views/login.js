import "../components/loginForm";

export default class {
  constructor(props) {
    document.title = props.title;
  }
  async render() {
    return /*html*/ `
    <div class="flex items-center justify-center min-h-full ">
      <div class="px-8 py-6 mt-4 text-left bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <login-form></login-form>
      </div>
    </div>
    `;
  }
}
