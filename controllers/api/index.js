// this index is going to be responsible for our model routes???
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postsRoutes = require('./postsRoutes');
const commentsRoutes = require('./commentsRoute');

router.use('/user', userRoutes);
router.use('/post', postsRoutes);
router.use('/comment', commentsRoutes);

module.exports = router;
