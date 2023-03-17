const { Router } = require("express");
const { userLogin, verifyEmail } = require("../controllers/auth.controller");


const authRouter = Router()

authRouter.post("/api/v1/auth/login", userLogin)

authRouter.post("/api/v1/auth/verify", verifyEmail)

module.exports = authRouter