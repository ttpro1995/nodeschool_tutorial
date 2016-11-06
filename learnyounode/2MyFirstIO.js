const fs = require('fs')

file_path = process.argv[2]

/*
fs.readFile(file_path,'utf8',(err,data)=>{
    if (err) throw err;
    res = data.split('\n')
    // console.log(res.length - 1)
})*/

data = fs.readFileSync(file_path,'utf8')
res = data.split('\n')
console.log(res.length - 1)
