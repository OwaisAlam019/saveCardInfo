const crypto = require("crypto")

key = crypto.randomBytes(32)
iv = crypto.randomBytes(16)

async function encrypt (plainText){
    
    cipher = await crypto.createCipheriv('aes-256-gcm',Buffer.from(key),iv)

    cipherText = cipher.update(plainText,"utf-8",'base64')
    
    cipherText += cipher.final('base64')

    return cipherText
}

module.exports = {
    encrypt
}