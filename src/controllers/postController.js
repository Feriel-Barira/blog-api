const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const post = await Post.create({ ...req.body, author: req.user.id });
  res.status(201).json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id).populate(
    "author",
    "username"
  );
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findOneAndUpdate(
    { _id: req.params.id, author: req.user.id },
    req.body,
    { new: true }
  );
  if (!post) return res.status(403).json({ message: "Not allowed" });
  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findOneAndDelete({
    _id: req.params.id,
    author: req.user.id,
  });
  if (!post) {
    return res.status(403).json({ message: "Not allowed or already deleted" });
  }
  res.json({ message: "Post and related comments deleted" });
};
