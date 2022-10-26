const {readFileSync} = require('fs')
// read the file
const fileContent = readFileSync(`.\\2021\\6\\input.txt`);
// split the file into an array of strings
let fishes = fileContent.toString().replaceAll('\r','').replaceAll('\n','').split(',')
const maxDay = 8
// count fishes for each day ( 0 to 8 days ), initialize counter object:
let counterObject = {}
for (let i = 0; i <= maxDay; i++) {
    counterObject[i] = 0
}
fishes.forEach(currentFishDay => {
    counterObject[currentFishDay]++
});
const daysCycle = 256
for (let i = 0; i < daysCycle; i++) {
    // save number of fishesh on day 0
    let fishesIn0 = counterObject[0];
    // move all positions to left, except 0 position
    for (let j = 1; j <= maxDay; j++) {
        counterObject[j - 1] = counterObject[j];
    }
    // add saved variable to 6th day
	counterObject[6] += fishesIn0;
    // assign saved variable to 8th day
	counterObject[8] = fishesIn0;
}
// counterObject has number of fishes counted, for each current living day
const resultToAdd = Object.values(counterObject).reduce((acumulate, nextToAdd) => acumulate + nextToAdd);
console.log(resultToAdd);