const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

//do i need comment? cause its not like ima comment my own post ??

// get that users route to all their post 
router.get('/dashboard', withAuth, async (req, res) => {

  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
  
    const posts = postData.map((post) => post.get({ plain:true }));

    res.render('post', {
      ...posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

    // res.render(200).json('mypost', {
//       layout: 'dashboard',
//       posts,
//     });
//   } catch (err) {
//     res.redirect('login');
//   }
// });


router.post('/dashboard', withAuth, async (req, res) => {
    
  try {
    const postData = await Post.create(req.body);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }

});
  
  
  module.exports = router;
  