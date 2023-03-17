const jwt  = require("jsonwebtoken");


class AuthServices {

    static getToken(payload){
        try {
            const tpken = jwt.sign(payload,'node-express',{
                algorithm: 'HS512',
                expiresIn: '5m'
            })
            return tpken
        } catch (error) {
            throw error
        }
    }
}

module.exports = AuthServices