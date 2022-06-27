const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/", adminController.getIndex);

router.get("/posts", adminController.getAllPost);

router.get("/post/:postId", adminController.getDetailPost);

router.get("/add-post", adminController.getAddPost);

router.post("/add-post", adminController.addPost);

router.get("/edit-post/:postId", adminController.getEditPost);

router.post("/edit-post", adminController.postEdit);

router.post("/delete-post", adminController.deletePost);

module.exports = router;
