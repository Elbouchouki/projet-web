const API_URL = "http://localhost:4000/";

const getArticles = async (take, skip) => {
  const res = await fetch(
    API_URL + `article?take=${take || -1}&skip=${skip || -1}`
  );
  const articles = await res.json();
  return articles?.articles;
};

const getCategories = async () => {
  const res = await fetch(API_URL + `categorie`);
  const categories = await res.json();
  return categories?.categories;
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

export { getArticles, getCategories, authenticateUser };
