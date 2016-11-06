const fs = require('fs')

my_dir = process.argv[2]
filter = process.argv[3]

fs.readdir(my_dir, (err, files)=>{
    files.forEach(file => {
        ok = (file.indexOf("."+filter)!= -1)
        if (ok) {
            console.log(file)
        }

    })
})
