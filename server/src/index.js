require("express-async-errors");
const express = require("express");
const { errorHandling } = require("./errorHandling.js");
require("dotenv").config();

const cors = require("cors");
const app = express();
const path = require("path");

app.use(express.json());
app.use(cors());

app.use("/ressources", express.static(path.resolve(__dirname, "..", "images")));

require("./routes")(app);
app.use(errorHandling);

app.listen(process.env.PORT || 4000, () => console.log("Running on port 4k"));
