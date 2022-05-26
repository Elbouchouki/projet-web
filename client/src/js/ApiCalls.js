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

export { getArticles, getCategories };
