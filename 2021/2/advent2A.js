const {readFileSync} = require('fs')
// read the file
const fileContent = readFileSync(`.\\2021\\2\\input.txt`);
// split the file into an array of strings
const array = fileContent.toString().split('\n')

let countForward = 0;
let countDown = 0;
let countUp = 0;
let aim = 0
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const [word, number] = element.split(' ')
    if(word === 'forward'){
        countForward += parseInt(number, 10)
        aim += parseInt(number, 10)
    }
    if(word === 'up'){
        countUp += parseInt(number, 10)
        
    }
    if(word === 'down'){
        countDown += parseInt(number, 10)
    }
}
const aimUpAndDown = countDown - countUp
const result = countForward * aimUpAndDown

console.log(result);