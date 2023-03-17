const { DataTypes } = require("sequelize");
const db = require("../utils/db");
const bcrypt = require("bcrypt");

const User = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    name: {
        type: DataTypes.STRING(30),
    },
    lastname: {
        type: DataTypes.STRING(30)
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
}, {
    hooks: {
        beforeCreate: async (newUser) => {
            try {
                const salt = await bcrypt.genSalt(10)
                const passwordHash = await bcrypt.hash(newUser.password, salt)
                newUser.password = passwordHash
            } catch (error) {
                throw error
            }

        }
    }
})

module.exports = User