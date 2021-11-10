var fs = require("fs");
/*
fs.writeFile('newdoc.txt','This is practice data here.',(err)=>{
    if (err) throw err;
    console.log("File Created!!")
})

//APPEND FILE
fs.appendFile('myappend.txt','this is appended file here \n',(err)=>{
    if(err) throw err;
    console.log("File appended")
})

//READ FILE
fs.readFile('data.json',"utf-8",function(err,data){
    if(err) throw err;
    console.log(data)
})*/

// fs.writeFile('newdoc.doc','This is practice data here.',(err)=>{
//     if (err) throw err;
//     console.log("File Created!!")
// })

// unlink

fs.unlink('newdoc.doc',(err)=>{
    if(err) throw err;
    console.log("File deleted")
})


