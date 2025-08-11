const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
  const comment = await Comment.create({
    content: req.body.content,
    post: req.params.postId,
    author: req.user.id,
  });
  res.status(201).json(comment);
};

exports.getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId }).populate(
    "author",
    "username"
  );
  res.json(comments);
};

exports.updateComment = async (req, res) => {
  const comment = await Comment.findById(req.params.commentId);

  if (!comment) {
    return res.status(404).json({ message: "Comment not found" });
  }
  // Only the author can update
  if (comment.author.toString() !== req.user.id) {
    return res
      .status(403)
      .json({ message: "Not authorized to update this comment" });
  }
  comment.content = req.body.content || comment.content;
  await comment.save();

  res.json(comment);
};
exports.deleteComment = async (req, res) => {
  const comment = await Comment.findById(req.params.commentId);
  if (!comment) {
    return res.status(404).json({ message: "Comment not found" });
  }
  // Only author can delete
  if (comment.author.toString() !== req.user.id) {
    return res
      .status(403)
      .json({ message: "Not authorized to delete this comment" });
  }
  await comment.deleteOne();
  res.json({ message: "Comment deleted successfully" });
};
