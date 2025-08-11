const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');

connectDB();
app.use(express.json());

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/posts', require('./routes/post.routes'));
app.use('/api/posts/:postId/comments', require('./routes/comment.routes'));

module.exports = app;
