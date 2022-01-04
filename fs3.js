const fs = require('fs');
const readStream  =fs.createReadStream('./example.txt','utf-8');
const writeStream = fs.createWriteStream('./example2.txt');

readStream.on('data', (chunk)=>{
    // console.log(chunk);
    writeStream.write(chunk);
})

/**
 * Readstream in fs read an input file as a stream. We can start to process a chunk of the data
 * without waiting the file to be fully read.
 */