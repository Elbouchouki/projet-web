const { client } = require("../src/prisma/client");
const users = require("./data/users.json");
const categories = require("./data/categories.json");
const articles = require("./data/articles.json");
const categoriesOnArticles = require("./data/categoriesOnArticles.json");
const { hash } = require("bcryptjs");

async function seed() {
  var id = 1;
  for (const user of users) {
    const hashedPass = await hash(user.password, 8);

    await client.utilisateur.create({
      data: {
        id: String(id++),
        nom: user.nom,
        email: user.email,
        password: hashedPass,
        role: user.role,
      },
    });
  }
  console.log("Users Done!");
  await client.categorie.createMany({
    data: categories,
  });
  console.log("Categories Done!");
  for (const article of articles) {
    await client.article.create({
      data: {
        published: article.published,
        image: article.image,
        titre: article.titre,
        contenu: article.contenu,
        authorId: article.authorId,
        commentaire: article.commentaire,
      },
    });
  }
  console.log("Articles Done!");
  await client.categoriesOnArticles.createMany({
    data: categoriesOnArticles,
    skipDuplicates: true,
  });
  console.log("CategoryArticleLink Done!");
}

seed()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await client.$disconnect();
  });
