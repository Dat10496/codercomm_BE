const express = require("express");
const router = express.Router();
const { loginWithEmail } = require("../controllers/auth.controllers");
const { body } = require("express-validator");
const { validate } = require("../middlewares/validators");

/**
 * @route POST /auth/login
 * @description Login with username and password
 * @body {email, password}
 * @access Public
 **/
router.post(
  "/login",
  validate([
    body("email", "Invalid email")
      .exists()
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false }),
    body("password", "Invalid passwords").exists().notEmpty(),
  ]),
  loginWithEmail
);

module.exports = router;
