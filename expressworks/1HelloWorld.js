// Thai Thien

var express = require('express')
var app = express()
const port = process.argv[2]

app.get('/home', (req,res)=>{
  res.end("Hello World!")
})

app.listen(port)
