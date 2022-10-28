const {readFileSync} = require('fs')
// read the file
const fileContent = readFileSync(`.\\2021\\8\\input.txt`);
// split the file into an array of strings
let input = fileContent.toString()
                                .replaceAll('\r','')
                                .split('\n')
let digitCounter = 0
const validNumberOfSegments = [2,3,4,7]
input.forEach(line => {
    if(!line){
        return
    }
    let [, fourDigitInput] = line.split('| ')
    let [first,second, third, fourth] = fourDigitInput.split(' ')
    const firstDigitSegments = first.length
    const secondDigitSegments = second.length
    const thirdDigitSegments = third.length
    const fourthDigitSegments = fourth.length
    if(validNumberOfSegments.includes(firstDigitSegments)){
        digitCounter++
    }
    if(validNumberOfSegments.includes(secondDigitSegments)){
        digitCounter++
    }
    if(validNumberOfSegments.includes(thirdDigitSegments)){
        digitCounter++
    }
    if(validNumberOfSegments.includes(fourthDigitSegments)){
        digitCounter++
    }
});

console.log(digitCounter);