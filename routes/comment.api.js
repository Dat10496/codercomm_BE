const express = require("express");
const router = express.Router();
const { loginRequired } = require("../middlewares/authentication");
const { body, param } = require("express-validator");
const { validate, checkObjectId } = require("../middlewares/validators");
const {
  createNewComment,
  updateSingleComment,
  deleteSingleComment,
  getSingleComment,
} = require("../controllers/comment.controllers");

/**
 * @route POST /comments
 * @description Create new comment
 * @body {content, postId}
 * @access Login required
 **/
router.post(
  "/",
  loginRequired,
  validate([
    body("content", "Missing content").exists().notEmpty(),
    body("postId").exists().isString().custom(checkObjectId),
  ]),
  createNewComment
);

/**
 * @route PUT /comments/:id
 * @description Update a comment
 * @access Login required
 **/
router.put(
  "/:id",
  loginRequired,
  validate([
    body("content", "Missing content").exists().notEmpty(),
    param("id").exists().isString().custom(checkObjectId),
  ]),
  updateSingleComment
);

/**
 * @route DELETE /comments/:id
 * @description Delete a comment
 * @access Login required
 **/
router.delete(
  "/:id",
  loginRequired,
  validate([param("id").exists().isString().custom(checkObjectId)]),
  deleteSingleComment
);

/**
 * @route GET /comments/:id
 * @description Get details of a comment
 * @access Login required
 **/
router.get(
  "/:id",
  loginRequired,
  validate([param("id").exists().isString().custom(checkObjectId)]),
  getSingleComment
);
module.exports = router;
