const {readFileSync} = require('fs')
// read the file
const fileContent = readFileSync(`.\\2021\\2\\input.txt`);
// split the file into an array of strings
const array = fileContent.toString().split('\n')

let countForward = 0;
let depth = 0;
let aim = 0
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const [word, number] = element.split(' ')
    if(word === 'forward'){
        countForward += parseInt(number, 10)
        depth += parseInt(number, 10) * parseInt(aim, 10)
    }
    if(word === 'up'){
        aim -= parseInt(number, 10)
    }
    if(word === 'down'){
        aim += parseInt(number, 10)
    }
}
const result = countForward * depth
console.log(result);