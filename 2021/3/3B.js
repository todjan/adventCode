const {readFileSync} = require('fs')
// read the file
const fileContent = readFileSync(`.\\2021\\3\\input.txt`);
// split the file into an array of strings
let array = fileContent.toString().split('\n')
let CO2SRateList = array
let count0 = []
let count1 = []
let CO2count0 = []
let CO2count1 = []
const stringLength = array[0].length
for (let i = 0; i < stringLength; i++) {
    array.forEach((item) => item[i] == '1' ? count1.push(item) : count0.push(item))
    const limit = Math.ceil(array.length / 2)
    if(array.length >= 1) {
        if (count1.length >= limit){
            array = count1
            count1 = []
            count0 = []
        } else {
            array = count0
            count1 = []
            count0 = []
        }
    }

    CO2SRateList.forEach((item) => item[i] == '1' ? CO2count1.push(item) : CO2count0.push(item))
    const limit2 = Math.ceil(CO2SRateList.length / 2)
    if(CO2count1.length >= 1) {
        if (CO2count1.length < limit2){
            CO2SRateList = CO2count1
            CO2count1 = []
            CO2count0 = []
        } else {
            CO2SRateList = CO2count0
            CO2count1 = []
            CO2count0 = []
        }
    }

}

const OGR = array.length == 1 ? parseInt(array[0],2) : 1
const CO2SRate = CO2SRateList.length == 1 ? parseInt(CO2SRateList[0],2) : 1

const lifeSupportRating = OGR * CO2SRate

console.log(lifeSupportRating);


