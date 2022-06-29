const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin.controller");

router.get("/posts", adminController.getAllPost);

router.get("/post/:postId", adminController.getDetailPost);

router.get("/add-post", adminController.getAddPost);

router.post("/add-post", adminController.addPost);

router.get("/edit-post/:postId", adminController.getEditPost);

router.put("/edit-post", adminController.postEdit);

router.delete("/delete-post/:postId", adminController.deletePost);

module.exports = router;
