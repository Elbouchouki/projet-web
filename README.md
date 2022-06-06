
# Projet Web - EL BOUCHOUKI Ahmed

Clone the project

```bash
  git clone https://github.com/Elbouchouki/projet-web
```

## Demo

#### Frontend : https://elbouchouki.github.io/
`NB: Some of the functionnalities won't work , please fork the repo and run it localy`
#### Backend  : https://projet-web-s2.herokuapp.com/

## Tech Stack

**Client:** JQuery , HTML , CSS , TailwindCSS

**Server:** NodeJS, ExpressJS, Prisma, JWT

## Backend

Project structure
```bash
├── images
│   └── ...
├── package.json
├── prisma
│   ├── data
│   │   ├── articles.json
│   │   ├── categories.json
│   │   ├── categoriesOnArticles.json
│   │   └── users.json
│   ├── migrations
│   │   ├── 20220512000004_init_migration
│   │   │   └── migration.sql
│   │   ├── 20220513003515_refresh_token
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   ├── schema.prisma
│   └── seed.js
├── src
│   ├── config
│   │   └── multer.js
│   ├── errorHandling.js
│   ├── index.js
│   ├── middleware
│   │   └── ensureAuthenticated.js
│   ├── prisma
│   │   └── client.js
│   ├── provider
│   │   ├── GenerateRefreshToken.js
│   │   └── GenerateToken.js
│   ├── routes
│   │   ├── articles.js
│   │   ├── auth.js
│   │   ├── categories.js
│   │   ├── commentaires.js
│   │   ├── index.js
│   │   └── users.js
│   └── useCases
│       ├── articles
│       │   ├── createArticle
│       │   │   ├── CreateArticleController.js
│       │   │   └── CreateArticleUseCase.js
│       │   ├── deleteArticle
│       │   │   ├── DeleteArticleController.js
│       │   │   └── DeleteArticleUseCase.js
│       │   ├── getAllArticles
│       │   │   ├── GetAllArticlesController.js
│       │   │   └── GetAllArticlesUseCase.js
│       │   ├── getArticle
│       │   │   ├── GetArticleController.js
│       │   │   └── GetArticleUseCase.js
│       │   └── updateArticle
│       │       ├── UpdateArticleController.js
│       │       └── UpdateArticleUseCase.js
│       ├── authentication
│       │   ├── authenticateUser
│       │   │   ├── AuthenticateUserController.js
│       │   │   └── AuthenticateUserUserCase.js
│       │   ├── refreshTokenUser
│       │   │   ├── RefreshTokenUserController.js
│       │   │   └── RefreshTokenUserUseCase.js
│       │   └── registerUser
│       │       ├── RegisterUserController.js
│       │       └── RegisterUserUseCase.js
│       ├── categorieOnArticle
│       │   ├── addArticleToCategorie
│       │   │   ├── addArticleToCategorieController.js
│       │   │   └── addArticleToCategorieUseCase.js
│       │   └── deleteArticleFromCategorie
│       │       ├── deleteArticleFromCategorieController.js
│       │       └── deleteArticleFromCategorieUseCase.js
│       ├── categories
│       │   ├── createCategorie
│       │   │   ├── CreateCategorieController.js
│       │   │   └── CreateCategorieUseCase.js
│       │   ├── deleteCategorie
│       │   │   ├── DeleteCategorieController.js
│       │   │   └── DeleteCategorieUseCase.js
│       │   ├── getAllCategories
│       │   │   ├── GetAllCategoriesController.js
│       │   │   └── GetAllCategoriesUseCase.js
│       │   ├── getCategorie
│       │   │   ├── GetCategorieController.js
│       │   │   └── GetCategorieUseCase.js
│       │   └── updateCategorie
│       │       ├── UpdateCategorieController.js
│       │       └── UpdateCategorieUseCase.js
│       ├── commentaires
│       │   ├── createCommentaire
│       │   │   ├── CreateCommentaireController.js
│       │   │   └── CreateCommentaireUseCase.js
│       │   ├── deleteCommentaire
│       │   │   ├── DeleteCommentaireController.js
│       │   │   └── DeleteCommentaireUseCase.js
│       │   ├── getAllCommentaires
│       │   │   ├── GetAllCommentairesController.js
│       │   │   └── GetAllCommentairesUseCase.js
│       │   ├── getCommentaire
│       │   │   ├── GetCommentaireController.js
│       │   │   └── GetCommentaireUseCase.js
│       │   └── updateCommentaire
│       │       ├── UpdateCommentaireController.js
│       │       └── UpdateCommentaireUseCase.js
│       └── users
│           ├── createUser
│           │   ├── CreateUserController.js
│           │   └── CreateUserUseCase.js
│           ├── deleteUser
│           │   ├── DeleteUserController.js
│           │   └── DeleteUserUseCase.js
│           ├── getAllUsers
│           │   ├── GetAllUsersController.js
│           │   └── GetAllUsersUseCase.js
│           ├── getUser
│           │   ├── GetUserController.js
│           │   └── GetUserUseCase.js
│           └── updateUser
│               ├── updateUserController.js
│               └── updateUserUseCase.js
├── test
│   ├── article.test.js
│   ├── auth.test.js
│   ├── categorie.test.js
│   ├── index.test.js
│   └── user.test.js
└── yarn.lock
```

Go to the project server directory

```bash
  cd projet-web/server
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```

Migrate the database

```bash
  yarn prisma migrate dev
```
or
```bash
  yarn prisma db push
```

Run unit tests
```bash
  yarn test
```

#### Seeding exemple
![Execution of seeder](/screens/seed.png)

#### Unit test exemple
![Execution of unit test](/screens/test.png)


## frontend

Project structure

```bash
├── index.html
├── package.json
├── src
│   ├── images
│   │   ├── logo.svg
│   │   └── user.png
│   └── js
│       ├── ApiCalls.js
│       ├── components
│       │   ├── allArticles.js
│       │   ├── article.js
│       │   ├── articleCard.js
│       │   ├── articleCategorie.js
│       │   ├── categorieCard.js
│       │   ├── footer.js
│       │   ├── header.js
│       │   ├── lastestArticles.js
│       │   ├── listCategories.js
│       │   ├── loginForm.js
│       │   ├── registerForm.js
│       │   └── testComp.js
│       ├── helper.js
│       ├── main.js
│       ├── routes.js
│       └── views
│           ├── article.js
│           ├── articles.js
│           ├── categorie.js
│           ├── categories.js
│           ├── home.js
│           ├── login.js
│           ├── other.js
│           └── register.js
└── yarn.lock
```

Go to the project client directory

```bash
  cd projet-web/client
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```

## Authors

- [@Elbouchouki Ahmed](https://github.com/Elbouchouki/)


## Screenshots
#### Home page dark mode :
![HOME DARK](/screens/home-dark.png)
#### Articles page light mode :
![ARTICLES LIGHT](/screens/Articles-light.png)
#### Details of an articles dark mode :
![DETAILS ARTICLE DARK](/screens/details-Article-dark.png)
#### Details of an articles light mode :
![DETAILS ARTICLE LIGHT](/screens/details-Article-light.png)
#### Categorie page light mode :
![CATEGORIE LIGHT](/screens/categories-light.png)
#### Details of a categorie dark mode :
![DETAILS CATEGORIE DARK](/screens/details-categorie-dark.png)
#### Other page dark mode :
![OTHER DARK](/screens/other-dark.png)
#### Home mobile dark mode :
![HOME MOBILE DARK](/screens/home-dark-mobile.png)
#### Home mobile light mode :
![HOME MOBILE DARK](/screens/home-light-mobile.png)
