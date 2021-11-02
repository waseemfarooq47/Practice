var http = require("http");
var port =process.env.PORT||7878
var server=http.createServer((req, res)=>{
   res.write("<div><h1> Hi this is from Nodejs backend server</h1><p>Ahaaa!!!!! lovely yooo yooo</p><p>Blaa Blaa yipeeeeee!!!</p><div>");
   res.end()
})

server.listen(portrs)