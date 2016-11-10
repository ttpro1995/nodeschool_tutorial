//Thai Thien
var express = require('express')
var fs = require('fs')
const port = process.argv[2]
const file = process.argv[3]



var app = express()
app.get('/books',(req,res)=>{
  fs.readFile(file,(err,data)=>{
    var obj = JSON.parse(data.toString())
    res.json(obj)
    res.end()
  })
})

app.listen(port)
