const {readFileSync} = require('fs')
// read the file
const fileContent = readFileSync(`.\\2021\\6\\input.txt`);
// split the file into an array of strings
let array = fileContent.toString().replaceAll('\r','').split(',')
for (let j = 0; j < 80; j++) {
    let arrayApoyo = []
    for (let i = 0; i < array.length; i++) {
        const fishAge = parseInt(array[i]) - 1;
        if(fishAge == -1){
            //array[i] = 6
            arrayApoyo.push(8)
        } else {
            array[i] = fishAge
        }
    }
    if(arrayApoyo.length > 0){
        array = array.concat(arrayApoyo)
    }
}

console.log(array.length);