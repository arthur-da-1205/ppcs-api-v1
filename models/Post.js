const Sequelize = require("sequelize");

const sequelize = require("../utils/db");

const Post = sequelize.define("post", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  thumbnail: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  post: Sequelize.STRING,
});

module.exports = Post;
