const express = require("express");
const router = express.Router();
const {
  register,
  getUsers,
  getCurrentUser,
  getSingleUser,
  updateProfile,
} = require("../controllers/user.controllers");
const { body, param } = require("express-validator");
const { validate, checkObjectId } = require("../middlewares/validators");
const { loginRequired } = require("../middlewares/authentication");

/**
 * @route POST /users
 * @description Register new user
 * @body {name, email, password}
 * @access Public
 **/
router.post(
  "/",
  validate([
    body("name", "Invalid name").exists().notEmpty(),
    body("email", "Invalid email")
      .exists()
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false }),
    body("password", "Invalid passwords").exists().notEmpty(),
  ]),
  register
);

/**
 * @route GET /users?page=1&limit=10
 * @description Get user with pagination
 * @access Login required
 **/
router.get("/", loginRequired, getUsers);

/**
 * @route GET /users/me
 * @description Get current user Info
 * @access Login required
 **/
router.get("/me", loginRequired, getCurrentUser);

/**
 * @route GET /users/:id
 * @description Get a user profile
 * @access Login required
 **/
router.get(
  "/:id",
  loginRequired,
  validate([param("id").exists().isString().custom(checkObjectId)]),
  getSingleUser
);

/**
 * @route PUT /users/:id
 * @description Update user profile
 * @body {name, avatarUrl, coverUrl, aboutMe, city, country, company, jobTitle, facebookLink, instagramLink, linkedinLink, twitterLink}
 * @access Login required
 **/
router.put(
  "/:id",
  loginRequired,
  validate([param("id").exists().isString().custom(checkObjectId)]),
  updateProfile
);
module.exports = router;
