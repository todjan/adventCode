const {readFileSync} = require('fs')
// read the file
const fileContent = readFileSync(`.\\2021\\5\\input.txt`);
// split the file into an array of strings
const array = fileContent.toString().replaceAll('\r','').split('\n')

function parseEntry(entry){
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
    return {x1, y1, x2, y2}
}

let pointCounter = {}
array.forEach(entry => {
    if(!entry.includes('->')){
        return
    }
    let {x1,y1,x2,y2} = parseEntry(entry)
    let count = 0
    //45 degree condition
    if(Math.abs(x1 - x2) == Math.abs(y1 - y2)){
        if(x1 > y1 && x2 < y2){
            while(x1 >= x2) {
                count = pointCounter[`${x1},${y1}`]
                pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
                x1--
                y1++
            }
            return
        } else if (x1 == y1 && x2 == y2){
            while(x1 < x2) {
                count = pointCounter[`${x1},${y1}`]
                pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
                x1++
                y1++
            }
            while(x1 > x2) {
                count = pointCounter[`${x1},${y1}`]
                pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
                x1--
                y1--
            }
            count = pointCounter[`${x1},${y1}`]
            pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
            return
        } else if (x1 <= y1 && x2 > y2){
            while(x1 <= x2) {
                count = pointCounter[`${x1},${y1}`]
                pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
                x1++
                y1--
            }
            return
        } else if (x1 < y1 && x2 >= y2){
            while(x1 <= x2) {
                count = pointCounter[`${x1},${y1}`]
                pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
                x1++
                y1--
            }
            return
        } else if (x1 > x2 && y1 > y2){
            while(x1 >= x2) {
                count = pointCounter[`${x1},${y1}`]
                pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
                x1--
                y1--
            }
            return
        } else if (x1 < x2 && y1 < y2){
            while(x1 <= x2) {
                count = pointCounter[`${x1},${y1}`]
                pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
                x1++
                y1++
            }
            return
        } else if (x1 > x2 && y1 < y2){
            while(y1 <= y2) {
                count = pointCounter[`${x1},${y1}`]
                pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
                x1--
                y1++
            }
            return
        } else if (x1 < x2 && y1 > y2){
            while(y2 <= y1) {
                count = pointCounter[`${x1},${y1}`]
                pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
                x1++
                y1--
            }
            return
        }
    }
    //column or row conditions
    if(x1 > x2 && y1 == y2){
        while(x1 >= x2) {
            count = pointCounter[`${x1},${y1}`]
            pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
            x1--
        }
        return
    } else if(x1 < x2 && y1 == y2) {
        while(x1 <= x2) {
            count = pointCounter[`${x1},${y1}`]
            pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
            x1++
        }
        return
    }
    if(y1 > y2 && x1 == x2){
        while(y1 >= y2) {
            count = pointCounter[`${x1},${y1}`]
            pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
            
            y1--
        }
        return
    } else if(y1 < y2 && x1 == x2) {
        while(y1 <= y2) {
            count = pointCounter[`${x1},${y1}`]
            pointCounter[`${x1},${y1}`] = count ? count + 1 : 1;
            y1++
        }
        return
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