const {readFileSync} = require('fs')
// read the file
const fileContent = readFileSync(`.\\2021\\5\\input.txt`);
// split the file into an array of strings
const array = fileContent.toString().replaceAll('\r','').split('\n')
let pointCounter = {}
array.forEach(entry => {
    const [firstEntry, secondEntry] = entry.split(' -> ')
    if(!firstEntry || !secondEntry){
        return
    }
    let [x1, y1] = firstEntry.split(',')
    let [x2, y2] = secondEntry.split(',')
    x1 = parseInt(x1)
    y1 = parseInt(y1)
    x2 = parseInt(x2)
    y2 = parseInt(y2)
    if(x1 != x2 && y1 != y2){
        return
    }
    let count = 0
    if(x1 > x2){
        while(x1 >= x2) {
            count = pointCounter[`${x1},${y1}`]
            pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
            x1--
        }
    } else if(x1 < x2) {
        while(x1 <= x2) {
            count = pointCounter[`${x1},${y1}`]
            pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
            x1++
        }
    }
    if(y1 > y2){
        while(y1 >= y2) {
            count = pointCounter[`${x1},${y1}`]
            pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
            y1--
        }
    } else if(y1 < y2) {
        while(y1 <= y2) {
            count = pointCounter[`${x1},${y1}`]
            pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
            y1++
        }
    }
});

const countedResult = Object.values(pointCounter)
let overlapPoints = 0
for (let i = 0; i < countedResult.length; i++) {
    const counted = countedResult[i];
    if(counted > 1){
        overlapPoints++
    }
}
console.log(overlapPoints);