import home from "./views/home.js";
import articles from "./views/articles.js";
import login from "./views/login.js";
import register from "./views/register.js";
import categories from "./views/categories.js";
import categorie from "./views/categorie.js";
import article from "./views/article.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );
  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const routes = [
  { path: "/", view: home, title: "Home" },
  { path: "/articles", view: articles, title: "Articles" },
  { path: "/articles/:id", view: article, title: "Articles" },
  { path: "/categories", view: categories, title: "Categories" },
  { path: "/categories/:id", view: categorie, title: "Categorie" },

  { path: "/login", view: login, title: "Login" },
  { path: "/register", view: register, title: "Register" },
];

const router = async () => {
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let result = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!result) {
    history.replaceState("", "", "/");
    result = {
      route: routes[0],
      result: [location.pathname],
    };
  }
  const route = new result.route.view({
    title: result.route.title,
    ...getParams(result),
  });

  app.innerHTML = await route.render();
};

export { pathToRegex, getParams, navigateTo, router, routes };
