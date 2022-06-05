const { client } = require("../src/prisma/client");
const users = require("./data/users.json");
const categories = require("./data/categories.json");
const articles = require("./data/articles.json");
const categoriesOnArticles = require("./data/categoriesOnArticles.json");
const { hash } = require("bcryptjs");

async function emptyDB() {
  console.log("Emptying DB");
  await client.$executeRawUnsafe("DELETE FROM CategoriesOnArticles");
  await client.$executeRawUnsafe("DELETE FROM Commentaire");
  await client.$executeRawUnsafe("DELETE FROM Article");
  await client.$executeRawUnsafe("DELETE FROM Categorie");
  await client.$executeRawUnsafe("DELETE FROM RefreshToken");
  await client.$executeRawUnsafe("DELETE FROM Utilisateur");
  console.log("Emptying DB Done!");
}

async function seed() {
  var id = 1;
  await emptyDB();

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
  console.log("Seeding Users Done!");
  await client.categorie.createMany({
    data: categories,
  });
  console.log("Seeding Categories Done!");
  let i = 0;
  for (const article of articles) {
    await client.article.create({
      data: {
        published: article.published,
        image: `image(${i++}).jpg`,
        titre: article.titre,
        contenu: article.contenu,
        authorId: article.authorId,
        commentaire: article.commentaire,
      },
    });
    if (i > 24) i = 0;
  }
  console.log("Seeding Articles Done!");
  await client.categoriesOnArticles.createMany({
    data: categoriesOnArticles,
    skipDuplicates: true,
  });
  console.log("Seeding CategoryArticleLink Done!");
}

seed()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await client.$disconnect();
  });
