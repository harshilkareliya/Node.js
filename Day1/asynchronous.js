const fs = require('fs')

console.log('Please Wait 10 second for reading file')

var a = 10

const countDown = setInterval(()=>{
    console.log(a)
    a--;
    if(a==0){
        console.log(fs.readFileSync('test.txt').toString())
        clearInterval(countDown)
    }
},1000)

console.log('Read me until file loading ')