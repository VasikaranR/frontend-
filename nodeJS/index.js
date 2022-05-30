//fs and zlib
const zlib = require('zlib');
const fs = require('fs');

//gzip -> algorithm
const gzip= zlib.createGzip();

const input =fs.createReadStream('Vasi.html');
const output=fs.createWriteStream('Vasi.html.gz');

input
.pipe(gzip)
.pipe(output)
