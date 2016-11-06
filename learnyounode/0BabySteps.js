// console.log(process.argv)
// [0] path to node.exe
// [1] path of js file
// arg

a = process.argv
s = 0
for (i = 2; i < a.length; i++){
    s = s + parseInt(a[i])
}

console.log(s)
