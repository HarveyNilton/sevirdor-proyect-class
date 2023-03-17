const jwt = require("jsonwebtoken");

const autentificate = (req,res,next) =>{
    const token = req.headers['xauth-token'];

    if (!token) {
       return next({
            status: 401,
            error: "Unauthorized",
            message: 'No token provided'
        })
    }
    try {
        const decoids = jwt.verify(token,'node-express',{algorithms: 'HS512'})
        req.userInfo = decoids
        next();
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = autentificate;