const fs = require('fs')
// read the file
const fileContent = fs.readFileSync(`.\\2021\\1\\input.txt`);
// split the file into an array of strings
const array = fileContent.toString().split('\n')
let totalSum
let counter = 0
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const prevElement = array[i-1]
    const prePrevElement = array[i-2]

    if(prevElement && prePrevElement && !isNaN(element)){
        const previousSum = totalSum
        totalSum = parseInt(element,10) + parseInt(prevElement,10) + parseInt(prePrevElement,10)
        if(previousSum && totalSum > previousSum){
            counter++
        }
    }
    
}

const result = counter
    
console.log(result);