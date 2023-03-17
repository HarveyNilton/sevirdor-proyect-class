const { DataTypes } = require("sequelize");
const db = require("../utils/db");

const Answer = db.define("answers", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
       field: "user_id"
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "post_id"
    }
},{
    timestamps:true,
    updatedAt:false 
})

module.exports = Answer