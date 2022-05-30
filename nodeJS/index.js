//fs and zlib
const zlib = require('zlib');
const fs = require('fs');

//gzip -> algi
const gzip= zlib.createGzip();

const input =fs.createReadStream('mahaSanjuNithyaVasi.html');
const output=fs.createWriteStream('mahaSanjuNithyaVasi.html.gz');

input
.pipe(gzip)
.pipe(output)
