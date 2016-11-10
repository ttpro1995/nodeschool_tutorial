// Thai Thien

var express = require('express')
const port = process.argv[2]

var app = express()

app.get('/search',(req,res)=>{
  res.setHeader('Content-Type','application/json')
  res.send(req.query)
  res.end()
})

app.listen(port)
