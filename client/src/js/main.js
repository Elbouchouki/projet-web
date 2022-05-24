import { router } from "./routes.js";

import "./components/header";
import "./components/footer";

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

$(document.body).click(function (e) {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState("", "", e.target.href);
    changeNavStyle(e.target);
    router();
  }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", async () => {
  await $("#header").html("<custom-header></custom-header>");
  await $("#footer").html("<custom-footer></custom-footer>");
  await router();
});
