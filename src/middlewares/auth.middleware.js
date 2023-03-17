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
        const decoded = jwt.verify(token,"nodeexpress",{algorithms: "HS512"})
        req.user = decoded
        next();
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = autentificate;