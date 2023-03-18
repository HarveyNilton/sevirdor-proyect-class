const UsersServices = require("../services/user.services")
const bcrypt = require("bcrypt")
const transporter = require("../utils/mailer")
const AuthServices = require("../services/auth.services")


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

        // Enviar Mensaje Gmail
        const {id, email,username} = result
        const token = await AuthServices.getToken({
            id,
            email,
            username
        })
        await transporter.sendMail({
            to: result.email,
            from: 'harveynilto@gmail.com',
            subject: 'Verifica tu correo electronico',
            html: `<h1>Welcome ${result.username} to the app</h1>
            <p>Es necesario que verifique su correo</p>
            <a href="http://localhost:5173/#/verify?token=${token}" target="_blank"> validar correo </a>`
        })

        
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
        const result = await UsersServices.update(id,{ name, lastname })
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