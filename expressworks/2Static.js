// Thai Thien
const express = require('express')

const port = process.argv[2]
const html_file = process.argv[3]

var app = express()

app.use(express.static(html_file || 'public'))

app.listen(port)
