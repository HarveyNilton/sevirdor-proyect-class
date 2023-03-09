const { logError, errorHandler } = require("../middlewares/error.handler");

const errorHandlerRouter = (app)=>{
    app.use(logError)
    
    app.use(errorHandler)
}

module.exports = errorHandlerRouter