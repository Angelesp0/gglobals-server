const jwt = require('jsonwebtoken');
const conf = require("./../config/jwt.config");

const validarJWT = (req, res, next) => {
    // Leer el Token
    const token = req.header('user_token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {

        const { uid } = jwt.verify(token, conf.TOKEN_KEY);
        req.uid = uid;

        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }

}


module.exports = {
    validarJWT
}