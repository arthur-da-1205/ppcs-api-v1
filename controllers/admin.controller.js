const Post = require("../models/Post");

exports.getAllPost = (req, res, next) => {
  Post.findAll()
    .then((posts) => {
      if (!posts) {
        return res.json({ message: "No data" });
      }
      return res.send(posts);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getDetailPost = (req, res, next) => {
  // res.render("posts");
  const postId = req.params.postId;

  Post.findByPk(postId)
    .then((post) => {
      res.status(200).send(post);
    })
    .catch((err) => console.log(err));
};

exports.getAddPost = (req, res) => {
  // res.send({ message: "Work" });
  // res.render("add-edit-post");
};

exports.addPost = (req, res, next) => {
  // res.render("add-edit-post");
  const title = req.body.title;
  const thumbnail = req.body.thumbnail;
  const post = req.body.post;
  if (!title) {
    res.status(400).send({ message: "Please enter the Title" });
  } else {
    Post.create({
      title: title,
      thumbnail: thumbnail,
      post: post,
    })
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
};

exports.getEditPost = (req, res, next) => {
  res.render("add-edit-post");
};

exports.postEdit = (req, res, next) => {
  // res.render("add-edit-post");
  const postId = req.body.id;
  const updatedTitle = req.body.title;
  // console.log(updatedTitle);
  const updatedThumbnail = req.body.thumbnail;
  const updatedPost = req.body.post;

  Post.findByPk(postId)
    .then((data) => {
      return data
        .update({
          title: updatedTitle,
          thumbnail: updatedThumbnail,
          post: updatedPost,
        })
        .then(() => {
          res.status(200).send(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deletePost = (req, res, next) => {
  // console.log("deleted");
  const postId = req.params.postId;

  Post.findByPk(postId)
    .then((post) => {
      if (!post) {
        return res.status(400).send({
          message: "Post not found!",
        });
      }
      return post
        .destroy()
        .then(() => {
          res.status(200).send({ message: "Deleted" });
        })
        .catch((error) => console.log(error));
    })
    .catch((err) => res.status(400).send(err));
};
