var fs = require ("fs")
//*********WRITE DATA******** */
/*fs.writeFile('mydoc.txt','this is dummy data',(err)=>{
    if(err) throw err;

    console.log("File Created!")
})*/


// **********APPEND DATA*************

/*fs.appendFile('mytest.doc','this is appended file \n',(err)=>{
    if(err) throw err;
    console.log("File appended")
})*/

// **********READ DATA*************
// >> needs to give format 
/*fs.readFile('db.json','UTF-8',(err,data)=>{
    if (err) throw err;
    console.log(data)
})*/

// **********rename DATA*************
/*
fs.rename('mydoc.txt','mytext.txt',(err)=>{
    // >> error report should be there whether the file exist otherwise it doesnot mention error 
    if(err) throw err; 
    console.log("File renamed")
})*/

// **********rename DATA*************
fs.unlink('mytest.doc',function(err){
    if(err) throw err;
    console.log("File deleted")
})
