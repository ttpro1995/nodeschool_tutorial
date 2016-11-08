const express = require('express')
const port = process.argv[2]
const jade_index_file = process.argv[3]

var app = express()
app.set('views',jade_index_file)
app.set('view engine', 'jade')


app.get('/home',(req,res)=>{
  var date = new Date().toDateString()
  res.render('index',{date:date})
})

app.listen(port)
