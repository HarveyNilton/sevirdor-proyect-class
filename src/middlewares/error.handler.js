const { ValidationError,
    DatabaseError,
    BaseError,
    ConnectionError,
    ConnectionAcquireTimeoutError,
    ConnectionRefusedError,
    ConnectionTimedOutError,
    InvalidConnectionError } = require("sequelize");

// Crear un funcion para logger los errors

const logError = (err, req, res, next) => {
    console.log(err);
    next(err);
}

const errorHandler = (err, req, res, next) => {
    let { status } = err;
    return res.status(status || 500).json({ message: err.message, errorName: err.name })
}


module.exports = {
    logError,
    errorHandler,
}