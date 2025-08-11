const express = require('express');
const router = express.Router({ mergeParams: true });
const auth = require('../middlewares/auth');
const { addComment, getComments,updateComment, deleteComment} = require('../controllers/commentController');

router.get('/', getComments);
router.post('/', auth, addComment);
router.put('/:commentId', auth, updateComment);   
router.delete('/:commentId', auth, deleteComment);

module.exports = router;
