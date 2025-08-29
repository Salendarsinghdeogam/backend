<<<<<<< HEAD
const express = require ('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/profile', (req, res) => {
  res.send('mera profile')
})

app.listen(3001)
=======
const http = require ('http');

const server= http.createServer (function (paramreq, res) {
    res.end("hello world");
    
})
server.listen(3001);
>>>>>>> 5ec84eaaa885d05922000989d653537931555ea8
