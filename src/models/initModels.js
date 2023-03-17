const Answer = require("./answer.model");
const Category = require("./categories.model");
const Post = require("./post.model");
const User = require("./user.model");


const initModels = ()=>{
    User.hasMany(Post,{foreignKey: 'userId'})
    Post.belongsTo(User,{ /*as:"hh"*/ foreignKey:'userId'})

    User.hasMany(Answer,{foreignKey:'userId'})
    Answer.belongsTo(User,{foreignKey:'userId'})

    Category.hasMany(Post,{foreignKey:'categoryId'})
    Post.belongsTo(Category,{foreignKey:'categoryId'})

    Post.hasMany(Answer,{foreignKey:'postId'})
    Answer.belongsTo(Post,{foreignKey:'postId'})
}

module.exports = initModels