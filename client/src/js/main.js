import { router } from "./routes.js";

import "./components/header";
import "./components/footer";
import Header from "./components/header";

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", async () => {
  const headerHTML = await new Header().render();
  await $("#header").html($(headerHTML));
  await $("#footer").html("<custom-footer></custom-footer>");
  await router();
});
