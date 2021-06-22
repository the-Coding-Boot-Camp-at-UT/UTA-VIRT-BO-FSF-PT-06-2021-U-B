const Post = require('./post');
const Author = require('./author');

Post.belongsTo(Author);

Author.hasMany(Post);

module.exports = { Post, Author };
