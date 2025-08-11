const mongoose = require("mongoose");
const Comment = require("./Comment");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [String],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

// Delete associated comments when a post is deleted
postSchema.pre("findOneAndDelete", async function (next) {
  const postId = this.getQuery()._id;
  console.log("🔥 Hook triggered! Deleting comments for post:", postId);
  await Comment.deleteMany({ post: postId });
  next();
});

module.exports = mongoose.model("Post", postSchema);
