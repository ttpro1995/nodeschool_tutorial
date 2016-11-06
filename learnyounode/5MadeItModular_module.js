const fs = require('fs')

module.exports = function(my_dir,ext, _callback){
// my_dir = process.argv[2]
// ext = process.argv[3]

fs.readdir(my_dir, (err, files)=>{

    a = []
    if (err) {
       return _callback(err)
    }

    files.forEach(file => {
        ok = (file.indexOf("."+ext)!= -1)
        if (ok){
            a.push(file)
        }
    })
    return _callback(null,a)

})
}
