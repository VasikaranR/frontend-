const crypto = require('crypto');
const encrypt_password = 'b72c0d0e5bf56533e46ff7f6052ecf53';
const decipher = crypto.createDecipher('aes-128-cbc','a password123');
var decrypted = decipher.update(encrypt_password,'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);