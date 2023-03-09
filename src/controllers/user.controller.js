const UsersServices = require("../services/user.services")


const getUserAll = async (req, res, next) => {
    try {
        const users = await UsersServices.userAll()
        res.json(users)
    } catch (error) {
        next(error)

    }
}

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body
        const result = await UsersServices.create(newUser)
        res.status(201).send(result)
    } catch (error) {
        next(error)

    }
}

const editUser = async (req, res, next) => {
    try {
        const { id } = req.params
        // const data = req.body
        // const result = await UsersServices.update(data,id)
        const { name, lastname } = req.body
        const result = await UsersServices.update({ name, lastname }, id)
        res.status(204).json(result)
    } catch (error) {
        next(error)

    }
}

const deleteUser = async (req, res,next) => {
    try {
        const { id } = req.params
        const data = req.body
        const result = await UsersServices.deleteus(id, data)
        res.status(204).json('not Content')
    } catch (error) {
        next(error)

    }
}


module.exports = {
    createUser,
    editUser,
    getUserAll,
    deleteUser
}