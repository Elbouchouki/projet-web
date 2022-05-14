require("express-async-errors");
const express = require("express");
const { errorHandling } = require("./errorHandling.js");
const { router } = require("./routes.js");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(router);

app.use(errorHandling);

app.listen(4000, () => console.log("Running on port 4k"));
