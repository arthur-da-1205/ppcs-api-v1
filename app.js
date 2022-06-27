require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT;

const sequelize = require("./utils/db");

const Post = require("./models/Post");

app.set("view engine", "ejs");
app.set("views", "views");

const adminRouter = require("./routes/admin");

app.use("/", adminRouter);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

sequelize
  .sync()
  // .sync({ force: true })
  .then((res) => {
    console.log(res);
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
