var fs=require("fs");
//***CREATE
// fs.writeFile("myfile.doc","this is from node for you",(err)=>{
//     if (err) throw err;
//     console.log("file created succesfully")
// })

//**** APPEND FILE
/*fs.appendFile("appfile.txt","this is appended second time",(err)=>{
    if (err) throw err;
    console.log("file appended")
})*/


//*** READ FILE
// fs.readFile("appfile.txt","utf-8",(err,data)=>{
//     if (err) throw err;
//     console.log(data)
// })


// fs.readFile("stock.json","utf-8",(err,data)=>{
//     if (err) throw err;
//     console.log(data)
// })

//*** RENAME FILE
// fs.rename('myfile.doc','waseem.txt',(err)=>{
//     if(err)throw err;
//     console.log('file renamed')
// })

//*** DELETE FILE
fs.unlink('myfile',(err)=>{
    // if(err)throw err;
    console.log('file deleted')
})
