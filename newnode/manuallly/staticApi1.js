var http= require("http");
var fs = require('fs');
var port = process.env.PORT || 4545

// >>> i have to read the file
var server=http.createServer((req,res)=>{
    fs.readFile('data.json','utf-8',(err,data)=>{
        if (err) throw err;
        res.write(data);
        res.end()
    })
})

server.listen(port)