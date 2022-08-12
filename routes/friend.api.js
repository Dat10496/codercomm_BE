const express = require("express");
const router = express.Router();

/**
 * @route POST /friends/request
 * @description Send a friend request
 * @body {to : "User ID"}
 * @access Login required
 **/

/**
 * @route GET /friends/request/incoming
 * @description Get list of receive pending request
 * @access Login required
 **/

/**
 * @route GET /friends/request/outgoing
 * @description Get list of send pending request
 * @access Login required
 **/

/**
 * @route GET /friends
 * @description Get list of friends
 * @access Login required
 **/

/**
 * @route PUT /friends/request/:userId
 * @description Accept/Reject a receive pending request
 * @body {status: "accepted" or "declined"}
 * @access Login required
 **/

/**
 * @route DELETE /friends/requests/:userId
 * @description Cancel a friend request
 * @access Login required
 **/

/**
 * @route DELETE /friends/:userId
 * @description Remove a friend
 * @access Login required
 **/
module.exports = router;
