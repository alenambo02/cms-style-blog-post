const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

//do i need comment? cause its not like ima comment my own post ??

// get that users route to all their post 
router.get('/', withAuth, async (req, res) => {

  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.params.user_id,
      },
    });
  
    const posts = postData.map((post) => post.get({ plain:true }));

    res.render('dashboard', {
      ...posts,
      logged_in: req.session.logged_in,
      user_id: req.params.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/', withAuth, async (req, res) => {
    
  try {
    const postData = await Post.create(req.body);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }

});
  
  
  module.exports = router;
  