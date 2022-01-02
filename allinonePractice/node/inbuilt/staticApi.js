var http= require('http')
var fs=require('fs')
var port =process.env.PORT || 1231

var server=http.createServer((req,res)=>{
    fs.readFile('stock.json','utf-8',(err, data)=>{
        if (err) throw err;
        res.write(data);
        res.end();
    })
})

server.listen(port)