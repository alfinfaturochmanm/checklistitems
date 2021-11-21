module.exports = express => {

    const dotenv = require("dotenv");
    const jwt = require('jsonwebtoken');

    const Auth = []

    dotenv.config();
    process.env.TOKEN_SECRET;

    Auth.authenticateToken = (req, res, next) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (token == null) return res.sendStatus(401)

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            console.log(err)

            if (err) return res.sendStatus(403)

            req.user = user

            next()
        })
    }

    Auth.login = (req, res, next) => {

        res.send(Auth.generateAccessToken(req.body.username))
        return null;

    }

    Auth.generateAccessToken = (username) => {
        return jwt.sign(username, process.env.TOKEN_SECRET);
    }

    return Auth;

}