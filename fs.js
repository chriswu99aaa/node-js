const fs = require("fs");
//create a file
fs.writeFile('example.txt', "this is an example", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file was created");
        fs.readFile('example.txt','utf-8',(err,file)=>{
            if(err)
                console.log(err);
            else{
                console.log(file);
            }
        });
    }
});

// fs.rename('example.txt', 'example2.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log("renamed the file");
//     }
// });

fs.appendFile('example2.txt', '\n add some data to the file', (err)=>{
    if(err)
        console.log(err);
    else
        console.log("data appended");
});

fs.unlink('example2.txt', (err)=>{
    if(err)
        console.log(err);
    else    
        console.log('deleted the file');
});
