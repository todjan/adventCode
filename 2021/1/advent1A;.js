import fs from 'fs';
// read the file
const fileContent = fs.readFileSync(`C:\\Users\\tbolivar\\Desktop\\input.txt`);
// split the file into an array of strings
const array = fileContent.toString().split('\n')
let counter = 0
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const prevElement = array[i-1]
    if(prevElement && !isNaN(element) && parseInt(element,10) > parseInt(prevElement,10)){
        counter++
    }
}

const result = counter
    
console.log(result);