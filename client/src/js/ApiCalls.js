const API_URL = "https://projet-web-s2.herokuapp.com/";

const getArticles = async (take, skip) => {
  const res = await fetch(
    API_URL + `article?take=${take || -1}&skip=${skip || -1}`
  );
  const articles = await res.json();
  return articles?.articles;
};

const getArticle = async (id) => {
  const res = await fetch(API_URL + `article/${id}`);
  const article = await res.json();
  return article;
};

const getCategories = async () => {
  const res = await fetch(API_URL + `categorie`);
  const categories = await res.json();
  return categories?.categories;
};
const getCategorie = async (id) => {
  const res = await fetch(API_URL + `categorie/${id}`);
  const categorie = await res.json();
  return categorie?.categorie;
};

const authenticateUser = async ({ user }) => {
  const { email, password } = user;
  const res = await fetch(API_URL + `auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  return res;
};
const registerUser = async ({ user }) => {
  const { email, name, password } = user;
  await fetch(API_URL + `auth/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      nom: name,
      password: password,
    }),
  });
};

export {
  getArticles,
  getCategories,
  authenticateUser,
  getArticle,
  getCategorie,
  registerUser,
};
