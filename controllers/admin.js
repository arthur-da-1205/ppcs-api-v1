const Post = require("../models/Post");

exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getAllPost = (req, res, next) => {
  res.render("posts");
};

exports.getDetailPost = (req, res, next) => {
  res.render("posts");
};

exports.getAddPost = (req, res, next) => {
  res.render("add-edit-post");
};

exports.addPost = (req, res, next) => {
  res.render("add-edit-post");
};

exports.getEditPost = (req, res, next) => {
  res.render("add-edit-post");
};

exports.postEdit = (req, res, next) => {
  res.render("add-edit-post");
};

exports.deletePost = (req, res, next) => {
  console.log("deleted");
};
