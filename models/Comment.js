const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = Schema(
  {
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    post: { type: Schema.Types.ObjectId, required: true, ref: "Post" },

    reaction: {
      like: { type: Number, default: 0 },
      dislike: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
