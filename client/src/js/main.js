import { router } from "./routes.js";

import "./components/header";
import "./components/footer";

// Handle navigation

$(document.body).click(function (e) {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState("", "", e.target.href);
    router();
  }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", () => {
  $("#header").html("<custom-header></custom-header>");
  $("#footer").html("<custom-footer></custom-footer>");
  router();
});
