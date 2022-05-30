const decompress = require('zlib');
const fs= require('fs');

const unzip=decompress.createGunzip();

const hi =fs.createReadStream('Vasi.html.gz');
const helo =fs.createWriteStream('Vasi.html');

hi.pipe(unzip).pipe(helo);
console.log("decompressed");
