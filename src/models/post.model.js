const { DataTypes } = require("sequelize");
const db = require("../utils/db");

const Post = db.define("posts",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    title: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        /*field:"user_id"*/
    },
    category_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
       /* field:"categoty_id"*/
    }
   
},{
    timestamps:true,
    updatedAt:false 
})

module.exports = Post