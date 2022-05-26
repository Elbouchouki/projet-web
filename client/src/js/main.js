import { router } from "./routes.js";

import "./components/header";
import "./components/footer";

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", async () => {
  await $("#header").html("<custom-header></custom-header>");
  await $("#footer").html("<custom-footer></custom-footer>");
  await router();
});
