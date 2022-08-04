const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

//do i need comment? cause its not like ima comment my own post ??

// get that users route to all their post 
router.get('/', withAuth, async (req, res) => {

  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
  
    const posts = postData.map((post) => post.get({ plain:true }));

    res.render(200).json('mypost', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});
  
  
  module.exports = router;
  