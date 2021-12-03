var http = require('http');

var server = http.createServer((req, res) => {
    res.write("<div><h1>hello this is nodemon package watching the changes</h1><div>")
    res.end()
})

server.listen(5656)