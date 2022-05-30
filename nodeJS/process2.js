//console.log()
const fs= require('fs');
fs.createReadStream(__filename).pipe(process.stdout);

// process.stdout.write();
// const name=process.stdin.read('vasi');
process.stdout.write(`welcome {$name}`);