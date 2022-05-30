const crypto = require('crypto');
const password ='crypto@123';
const cipher = crypto.createCipher('aes128', 'a password');
var encrypted = cipher.update(password, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);