const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');


// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// need to define the reverse of the prior association definition
Post.belongsTo(User, {
  foreignKey: 'user_id',
})

// need to use belongsToMany method for many-to-many associations
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});


Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
});


// adding associations to directly link Vote to Post and Vote to User
Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});





module.exports = { User, Post, Vote };