const {readFileSync} = require('fs')
// read the file
const fileContent = readFileSync(`.\\2021\\7\\input.txt`);
// split the file into an array of strings
let crabsPosition = fileContent.toString()
                                .replaceAll('\r','')
                                .replaceAll('\n','')
                                .split(',')
                                .map(function(item) {
                                    return parseInt(item, 10);
                                })
const maxPosition = Math.max(...crabsPosition)
let arr = []
for (let position = 0; position <= maxPosition; position++) {
    let fuelForThisPosition = 0
    crabsPosition.forEach(crabPosition => {
        let difference = Math.abs(crabPosition - position)
        let total = 0
        for (let j = 0; j <= difference; j++) {
            total += j
        }
        fuelForThisPosition += total
    });
    arr.push(fuelForThisPosition)
}
console.log(Math.min(...arr));