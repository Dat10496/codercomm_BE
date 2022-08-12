var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Welcome to coderschool!");
});

// authApi
const authApi = require("./auth.api");
router.use("/auth", authApi);

// commentApi
const commentApi = require("./comment.api");
router.use("/comments", commentApi);

// postApi
const postApi = require("./post.api");
router.use("/posts", postApi);

// userApi
const userApi = require("./user.api");
router.use("/users", userApi);

// reactionApi
const reactionApi = require("./reaction.api");
router.use("/reactions", reactionApi);

// friendApi
const friendApi = require("./friend.api");
router.use("/friends  ", friendApi);

module.exports = router;
