const express = require("express");
const router = express.Router();

/**
 * @route POST /reactions
 * @description Save a reactions to post or comment
 * @body {targetType: "Post" or "Comment", targetId: "Like" or "Dislike"}
 * @access Login required
 **/

module.exports = router;
