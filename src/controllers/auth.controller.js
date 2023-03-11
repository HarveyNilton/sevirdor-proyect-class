const UsersServices = require("../services/user.services")
const bcrypt = require('bcrypt')

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await UsersServices.getUser(email)

        if (!user) {
            return next({
                status: 400,
                message: "Invalid email",
                error: "User not found"
            })
        }

        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
            return next({
                status: 400,
                message: "The password do not match with the user's",
                error: "Invalid password"
            })
        }

        const {id, email:userEmail,username,lastname} = user
        res.json({
           id,
           userEmail,
           username,
           lastname
        })

    } catch (error) {
        next(error)
    }
}

module.exports = {
    userLogin,
}