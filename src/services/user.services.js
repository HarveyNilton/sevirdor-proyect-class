const User = require("../models/user.model");


class UsersServices {

    static async userAll(){
        try {
            const users = await User.findAll({
                attributes:['id','name','lastname','username','email','password'],
                order:['id']
            })
            return users
        } catch (error) {
            throw error
        }
    }

    static async create(newUser) {
        try {
            const userCreated = await User.create(newUser)
            return userCreated
        } catch (error) {
            throw error
        }
    }

    /*attributes:['id','name','lastname','username','email','password']*/
    static async update(data, id) {
        try {
            const result = await User.update(data, {
                where: { id }
    
            })
            return result
        } catch (error) {
            throw error
        }
    }
    
    static async deleteus(id,date){
        try {
            const result = await User.destroy({
                where:{id}
            })
            return result
        } catch (error) {
            throw error
        }
    }

    // Autentification Users
    static async getUser(email) {
        try {
            const user = await User.findOne({
                where: { email }
            })
            return user
        } catch (error) {
            throw error
        }
    }
}

module.exports = UsersServices