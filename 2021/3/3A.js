const {readFileSync} = require('fs')
// read the file
const fileContent = readFileSync(`.\\2021\\3\\input.txt`);
// split the file into an array of strings
const array = fileContent.toString().split('\n')

const counts = {v1:0,v2:0,v3:0,v4:0,v5:0,v6:0,v7:0,v8:0,v9:0,v10:0,v11:0,v12:0};
array.forEach((value,i)=>{
    const [v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12] = value
    counts.v1 += v1 == '1' ? 1 : 0
    counts.v2 += v2 == '1' ? 1 : 0
    counts.v3 += v3 == '1' ? 1 : 0
    counts.v4 += v4 == '1' ? 1 : 0
    counts.v5 += v5 == '1' ? 1 : 0
    counts.v6 += v6 == '1' ? 1 : 0
    counts.v7 += v7 == '1' ? 1 : 0
    counts.v8 += v8 == '1' ? 1 : 0
    counts.v9 += v9 == '1' ? 1 : 0
    counts.v10 += v10 == '1' ? 1 : 0
    counts.v11 += v11 == '1' ? 1 : 0
    counts.v12 += v12 == '1' ? 1 : 0
})

const limit = Math.ceil(array.length / 2)
const {v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12} = counts
let gammaRate = ''
gammaRate += v1 >= limit ? '1' : '0'
gammaRate += v2 >= limit ? '1' : '0'
gammaRate += v3 >= limit ? '1' : '0'
gammaRate += v4 >= limit ? '1' : '0'
gammaRate += v5 >= limit ? '1' : '0'
gammaRate += v6 >= limit ? '1' : '0'
gammaRate += v7 >= limit ? '1' : '0'
gammaRate += v8 >= limit ? '1' : '0'
gammaRate += v9 >= limit ? '1' : '0'
gammaRate += v10 >= limit ? '1' : '0'
gammaRate += v11 >= limit ? '1' : '0'
gammaRate += v12 >= limit ? '1' : '0'
const epsilonRate = gammaRate.toString(2).replace(/[0-1]/g, (v) => v == 1 ? 0 : 1);
const powerConsumition = parseInt(gammaRate,2) * parseInt(epsilonRate,2)

console.log(powerConsumition)