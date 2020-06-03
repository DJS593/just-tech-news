const User = require('./User');
const Post = require('./Post');


// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// need to define the reverse of the prior association definition
Post.belongsTo(User, {
  foreignKey: 'user_id',
})



module.exports = { User, Post };