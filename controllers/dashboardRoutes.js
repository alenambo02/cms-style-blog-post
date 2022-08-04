const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

//do i need comment? cause its not like ima comment my own post ??

// get that users route to all their post 
router.get('/dashboard', withAuth, async (req, res) => {

    try {
      const postData = await Post.findAll({
        include: [{ model: User }],
      });
     
  
      res.status(200).json(postData);
      console.log()
    } catch (err) {
      res.status(500).json(err);
    }
  });


// user route so that they can be able to look at a single post
router.get('/dashboard/:id', withAuth, async (req, res) => {
   
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{ model: User }]
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// a route to create a new post 
router.post('/dashboard', withAuth, async (req, res) => {
    
    try {
      const postData = await Post.create(req.body);
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  
  });


// a route to update the post by specific id
router.put('/dashboard/:id', withAuth, async (req, res) => {
    
    try {
      const postData = await Post.update(
        { content: req.body.content }, 
        {
          where: {id: req.params.id}
        }
      );
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  
  });

  
// a route to delete a post by id
router.delete('/:id', withAuth, async (req, res) => {
   
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (! postData) {
        res.status(404).json({ message: 'This post was SUCCESSFULLY deleted!' });
        return;
      }
  
      res.status(200).json(categoriesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  