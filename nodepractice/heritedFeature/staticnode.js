var http=require('http');
var fs= require('fs');
var server;

server=http.createServer((req,res)=>{
    // fs.readFile('data.json','utf-8',(err,data)=>{
    //     if(err) throw err;
    //     res.write(data);
    //     res.end();
    // })

        res.write("data is from node js and we love it firstime new change  ulla bulla-->");
        res.end();


})

server.listen(4508)