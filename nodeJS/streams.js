const fs = require('fs')
var readStream = fs.createReadStream('./largeFile.txt')
var writeStream = fs.createWriteStream('./newFile.txt')        //transforms the data as chunks
readStream.on('data',(chunk)=>{ 
    console.log("chunk received")           
    writeStream.write(chunk)
})