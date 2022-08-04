// this index is going to be responsible for our model routes???
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postsRoutes = require('./postRoutes');
const commentsRoutes = require('./commentsRoute');

router.use('/users', userRoutes);
router.use('/posts', postsRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
