const http = require ('http');

const server= http.createServer (function (paramreq, res) {
    res.end("hello world");
    
})
server.listen(3001);