const fs  = require('fs');

// fs.mkdir('tutorial', (err)=>{
//     if(err) 
//         console.log(err);
//     else
//         console.log('folder created');

//         //  folder remove code
//         // fs.rmdir('tutorial', (err)=>{
//         //     if(err)
//         //         console.log(err);
//         //     else
//         //         console.log('folder deleted');
//         // })

//         fs.writeFile('./tutorial/example.txt', '123', (err)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log('file created');
//        })
// })

// fs.unlink('./tutorial/example.txt', (err)=>{
//     if(err)
//         console.log(err);
//     else{
//         fs.rmdir('tutorial', (err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('deleted the folder');
//             }
//         })
//     }

// })

fs.readdir('tutorial', (err, files)=>{
    if(err)
        console.log(err);
    else{
        // console.log(files);
        for(let file of files)
        {
            fs.unlink('./tutorial/' + file, (err)=>{
                if(err)
                    console.log(err);
                else
                    console.log('deleted all  files');
            })
        }
    }
})