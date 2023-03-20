const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    const { authorization } = req.headers

    if(!authorization) {
        return res.status(401).json('Пользователь не найден')
    }

    const [type, token] = authorization.split(' ')

    if(type !== 'Beader') {
        return res.status(401).json('Неверный тип токена')
    }
    try {
        req.user = await jwt.verify(token, process.env.SECRET_JWT)

        next()
    } catch (error) {
        return res.status(401).json(error.toString())
    }
}