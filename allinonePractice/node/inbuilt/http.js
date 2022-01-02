var http=require('http');

var server=http.createServer((req, res)=>{
    res.write("<h1>this is from node server new one</h1>")
    res.end()
})

server.listen(1212)