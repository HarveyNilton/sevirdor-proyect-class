const Answer = require("./answer.model");
const Category = require("./categories.model");
const Post = require("./post.model");
const User = require("./user.model");


const initModels = ()=>{
    User.hasMany(Post,{foreignKey: 'user_id'})
    Post.belongsTo(User,{ /*as:"hh"*/ foreignKey:'user_id'})

    User.hasMany(Answer,{foreignKey:'user_id'})
    Answer.belongsTo(User,{foreignKey:'user_id'})

    Category.hasMany(Post,{foreignKey:'category_id'})
    Post.belongsTo(Category,{foreignKey:'category_id'})

    Post.hasMany(Answer,{foreignKey:'post_id'})
    Answer.belongsTo(Post,{foreignKey:'post_id'})
}

module.exports = initModels