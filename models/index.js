//relationship 
const User = require('./User');
const Post = require('./Post');
const Comment = require ('./Comment')


 //ale can have many posts 
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  //post hasMany comments
  //Ale can make many comments
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
  });

 //Ale can have many comments
User.hasMany(Comment, {
    foreignKey: "username",
    onDelete: "CASCADE",
  });

//comments 
Comment.belongsTo(Post, {
    foreignKey: "post_id",
  });

  
  module.exports = { User, Post, Comment };