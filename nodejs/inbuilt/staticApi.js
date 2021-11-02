var http=require('http');
var fs=require('fs');

var server=http.createServer((req,res)=>{
    // reading file with the help of >>fs 
    fs.readFile('db.json','utf-8',(err,data)=>{
        // checking error
        if(err) throw err;
        // write data
        res.write(data);
        res.end() 
    })
})

server.listen(1221)