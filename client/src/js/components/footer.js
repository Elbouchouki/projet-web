// New component
class Footer extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = /* HTML */ `
      <footer class="p-4 bg-gray-100 shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div class="sm:flex sm:items-center sm:justify-between">
          <span
            href="https://flowbite.com"
            class="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="/src/images/logo.svg"
              class="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >Elbou-blog</span
            >
          </span>
          <!--<ul
            class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
          >
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Contact</a>
            </li>
          </ul>-->
        </div>
        <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        />
        <span
          class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2022 <span class="hover:underline">Elbou-blog</span>. All Rights
          Reserved.
        </span>
      </footer>
    `;
  }
}

customElements.define("custom-footer", Footer);
