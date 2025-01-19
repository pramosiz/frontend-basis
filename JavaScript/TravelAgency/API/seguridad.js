// HASHING
const bcrypt = require('bcrypt')
const cycles = 10
const salt = bcrypt.genSaltSync(cycles)

// ENCRYPTION
const crypto = require('crypto')
const algorithm = 'aes-128-gcm'
const password = 'pass 16 characters'
const iv = crypto.randomBytes(16)

// TOKEN
const jwt = require('jsonwebtoken')
const secretKey = "secretKey"

function myHash(password) {
    return bcrypt.hashSync(password, salt)
}

function myEncrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, password, iv)
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    return encrypted
}

function createToken(user_id, email) {
    const load = {
        user_id: user_id,
        email: email
    }
    const token = jwt.sign(load, secretKey, { expiresIn: '1h' })
    return token
}

function validateToken(req, res, next) {
    const token = req.headers['authorization']
    try {
        const decoded = jwt.verify(token.split(" ")[1], secretKey)
        req.user_id = decoded.user_id
        req.email = decoded.email
        next()
    } catch (error) {
        res.status(401).send("Token no válido")
    }
}

module.exports = { myHash, myEncrypt, createToken, validateToken }