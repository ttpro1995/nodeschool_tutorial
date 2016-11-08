// Thai Thien
const express = require('express')
const bodyparser = require('body-parser')

const port = process.argv[2]

var app = express()

app.use(bodyparser.urlencoded({extended: false}))
app.post('/form', (req,res)=>{
  res.setHeader('Content-Type','text/html')
  var name = req.body.str
  var name_backward = name.split('').reverse().join('')
  res.write(name_backward)
  res.end()
})
app.listen(port)
