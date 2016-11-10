// Thai Thien
const express = require('express')

const port = process.argv[2]
var __dirname = process.argv[3]
var index_html = __dirname+"/"+"index.html"
var index_main_styl = __dirname +"/"+"main.styl"

var app = express()
app.use(require('stylus').middleware(__dirname))
app.use(express.static(__dirname))
app.listen(port)
