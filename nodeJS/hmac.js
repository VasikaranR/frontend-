
const crypto = require('crypto');

const secret="secret key"

const hash = crypto.createHmac('sha256',secret)
      .update('password')
      .digest('hex');

console.log(hash);
