require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT;

const sequelize = require("./utils/db");

const Post = require("./models/Post");
const User = require("./models/User");

const adminRouter = require("./routes/admin.routes");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.json({ message: "Connect to API" });
});

app.use(adminRouter);

// Post.belongsTo(User);
// User.hasMany(Post);

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
