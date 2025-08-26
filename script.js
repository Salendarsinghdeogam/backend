const express = require ('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/profile', (req, res) => {
  res.send('mera profile')
})

app.listen(3001)