const UsersServices = require("../services/user.services")
const bcrypt = require('bcrypt')
const AuthServices = require("../services/auth.services")
const jwt = require("jsonwebtoken");


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

        
        if (!user.emailVerified) {
            return next({
                status: 400,
                message: "User email is not verified",
                error: "Email verification"
            })
        }
      
        const { id, name, username, lastname } = user
        const token = AuthServices.getToken({ id, name,lastname,username})
        res.json({
            id,
            name,
            lastname,
            username,
            email,
            token
        })

    } catch (error) {
        next(error)
    }
}

const verifyEmail = async (req, res, next) => {
    try {
        const { token } = req.body
  

        const userData = await jwt.verify(token,"nodeexpress",{
            algorithms: "HS512"
        })
       
      const user = UsersServices.getUser(userData.email)
        if (user.emailVerified) {
            return next({
                status: 400,
                message: "User is already verified",
                errorName: "Failed to verify email"
            })
        }

       await UsersServices.update(userData.id,{
        emailVerified : true,
       })
       
     res.status(204).send(e)
     
    } catch (error) {
        next({
            status: 400,
            message: "Invalid or expired token",
            errorName: error
        })
    }
}

module.exports = {
    userLogin,
    verifyEmail
}