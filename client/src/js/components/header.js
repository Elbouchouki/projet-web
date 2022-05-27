import { getArticles } from "../ApiCalls";
import { AllArticlesComponent } from "../helper";
import { navigateTo, router } from "../routes";
import ArticleCard from "./articleCard";
// New component
export default class Header {
  constructor() {}

  async render() {
    const unAuth = /* HTML */ ` <button
        type="button"
        class="header-login-redirect text-blue-700 mr-2 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
      >
        Login
      </button>
      <button
        type="button"
        class="header-login-redirect text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register
      </button>`;
    const user = await JSON.parse(localStorage.getItem("user"));

    var isAuth = /* HTML */ `<div class="flex items-center">
      <span
        class="bg-gray-100 ml-1 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
        >${user?.nom[0]?.toUpperCase() +
        user?.nom?.slice(1, user?.nom?.length)}</span
      >
      <button
        type="button"
        id="logout-header"
        class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-1 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Logout
      </button>
    </div>`;
    if (!user) {
      isAuth = unAuth;
    }
    return /* HTML */ `
      <nav
        class="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800"
      >
        <div
          class="container flex flex-wrap justify-between items-center mx-auto"
        >
          <div class="flex items-center">
            <img
              src="/src/images/logo.svg"
              class="mr-3 h-6 sm:h-9"
              alt="Elbouchouki Logo"
            />
            <span
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
              >Elbou-blog</span
            >
          </div>
          <div class="flex md:order-2">
            ${isAuth}
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              class="toggle-nav inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            id="nav-mobile"
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul
              class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
            >
              <li>
                <a
                  href="/"
                  data-link
                  class="nav-link block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="/articles"
                  data-link
                  class="nav-link block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Articles</a
                >
              </li>
              <li>
                <a
                  href="/categories"
                  data-link
                  class="nav-link block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Categories</a
                >
              </li>
              ${user?.role == "ADMIN"
                ? `<li>
                    <a
                      href="/users"
                      data-link
                      class="nav-link block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >Users</a
                    >
                  </li>`
                : ""}
              <li>
                <a
                  href="/other"
                  data-link
                  class="nav-link block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Other</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

// State
$(".toggle-nav").click(() => $("#nav-mobile").toggleClass("hidden"));

$(".header-login-redirect").click((e) =>
  navigateTo("/" + e.target.innerText.toLocaleLowerCase())
);
$("#user-menu-button").click(() =>
  $("#user-menu-dropdown").toggleClass("hidden")
);

// handling home navigation styling
const activeLinkCss =
  "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
const normalLinkCss =
  "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
const changeNavStyle = (element) => {
  $(".nav-link").removeClass(activeLinkCss);
  $(".nav-link").addClass(normalLinkCss);
  $(element).removeClass(normalLinkCss);
  $(element).addClass(activeLinkCss);
};
// Handle navigation

$(document)
  .on("click", "header", function (e) {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      history.pushState("", "", e.target.href);
      changeNavStyle(e.target);
      router();
    }
  })
  .on("click", ".header-login-redirect", (e) =>
    navigateTo("/" + e.target.innerText.toLocaleLowerCase())
  )
  .on("click", "#logout-header", async () => {
    localStorage.clear();
    const newHeader = await new Header().render();
    $("#header").html($(newHeader));
  });
