
const crypto = require('crypto');

const hash = crypto.createHash('md5')
      .update('password')
      .digest('hex');

console.log(hash);
