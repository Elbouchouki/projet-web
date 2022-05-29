export default class {
  constructor(props) {
    document.title = props.title;
  }
  async render() {
    return /* HTML */ `
      <div class=" flex h-full">
        <div
          class="container flex flex-col justify-center items-center  px-4 py-12 mx-auto text-center"
        >
          <h2
            class="text-3xl font-bold tracking-tight text-gray-600 dark:text-white"
          >
            This blog still not completed yet.
          </h2>

          <p
            class="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300"
          >
            new features will be applied soon.
          </p>
        </div>
      </div>
    `;
  }
}
