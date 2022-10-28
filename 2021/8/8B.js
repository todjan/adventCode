const {readFileSync} = require('fs')
// read the file
const fileContent = readFileSync(`.\\2021\\8\\input.txt`);
// split the file into an array of strings
let input = fileContent.toString()
                                .replaceAll('\r','')
                                .split('\n')
const validLettersOfSegments = 'abcdefg'
//segments
let hTop
let hMid
let hBot
let vTopL
let vTopR
let vBotL
let vBotR
let finalResultNumber = 0

input.forEach(line => {
    if(!line){
        return
    }
    let [uniqueSignal, fourDigitInput] = line.split('| ')
    //let [firstSign, secondSign, thirdSign, fourthSign, fifthSign, sixthSign, seventhSign, eighthSign, ninthSign, tenthSign] = uniqueSignal.split(' ')
    let signals = uniqueSignal.split(' ')
    let zero, one, two, three, four, five, six, seven, eigth, nine
    let possibleTwoThreeFive = []
    let possibleZeroSixNine = []
    for (let i = 0; i < signals.length; i++) {
        if(signals[i].length == 2){
            one = signals[i]
        }
        if(signals[i].length == 3){
            seven = signals[i]
        }
        if(signals[i].length == 4){
            four = signals[i]
        }
        if(signals[i].length == 5){
            possibleTwoThreeFive.push(signals[i])
        }
        if(signals[i].length == 6){
            possibleZeroSixNine.push(signals[i])
        }
        if(signals[i].length == 7){
            eigth = signals[i]
        }
    }
    //guess other numbers
    let regex = new RegExp(`[^${one}]{1}`,'g')
    let regexres = regex.exec(seven)
    hTop = regexres[0]
    let possibleZeroOrNine = []
    //guess 6, exclude 0 and 9
    possibleZeroSixNine.forEach((digit) => {
        let regex = new RegExp(`[^${digit}]{1}`,'g')
        let regexres = regex.exec(one)
        if(regexres){
            six = digit
            vTopR = regexres[0]
            vBotR = new RegExp(`[^${vTopR}]{1}`,'g').exec(one)[0]
        } else {
            possibleZeroOrNine.push(digit)
        }
    })
    //guess 2 3 and 5
    possibleTwoThreeFive.forEach((digit) => {
        let regex = new RegExp(`[^${digit}]{1}`,'g')
        let regexres = regex.exec(vTopR)
        let regexres1 = regex.exec(vBotR)
        if(regexres){
            five = digit
            vBotL = new RegExp(`[^${digit}${vTopR}]{1}`,'g').exec(`${validLettersOfSegments}`)[0]
        } else if(regexres1){
            two = digit
            vTopL = new RegExp(`[^${digit}${vBotR}]{1}`,'g').exec(`${validLettersOfSegments}`)[0]
        } else {
            three = digit
        }
    })
    // guess 0 and 9
    possibleZeroOrNine.forEach((digit) => {
        let regex = new RegExp(`[^${digit}]{1}`,'g')
        let regexres = regex.exec(vBotL)
        if(regexres){
            nine = digit
        } else {
            zero = digit
            hMid = new RegExp(`[^${digit}]{1}`,'g').exec(`${validLettersOfSegments}`)[0]
        }
    })
    hBot = new RegExp(`[^${hTop}${hMid}${vTopL}${vTopR}${vBotL}${vBotR}]{1}`,'g').exec(`${validLettersOfSegments}`)[0]

    //match signals with digits
    let digits = fourDigitInput.split(' ')
    let resultPerLine = []
    for (let i = 0; i < digits.length; i++) {
        let regex = new RegExp(`[${zero}]`,'g')
        let [...result] = digits[i].matchAll(regex)
        if(result.length == zero.length && digits[i].length == zero.length){
            resultPerLine.push(0)
        }
        regex = new RegExp(`[${one}]`,'g')
        let [...result1] = digits[i].matchAll(regex)
        if(result1.length == one.length && digits[i].length == one.length){
            resultPerLine.push(1)
        }
        regex = new RegExp(`[${two}]`,'g')
        let [...result2] = digits[i].matchAll(regex)
        if(result2.length == two.length && digits[i].length == two.length){
            resultPerLine.push(2)
        }
        regex = new RegExp(`[${three}]`,'g')
        let [...result3] = digits[i].matchAll(regex)
        if(result3.length == three.length && digits[i].length == three.length){
            resultPerLine.push(3)
        }
        regex = new RegExp(`[${four}]`,'g')
        let [...result4] = digits[i].matchAll(regex)
        if(result4.length == four.length && digits[i].length == four.length){
            resultPerLine.push(4)
        }
        regex = new RegExp(`[${five}]`,'g')
        let [...result5] = digits[i].matchAll(regex)
        if(result5.length == five.length && digits[i].length == five.length){
            resultPerLine.push(5)
        }
        regex = new RegExp(`[${six}]`,'g')
        let [...result6] = digits[i].matchAll(regex)
        if(result6.length == six.length && digits[i].length == six.length){
            resultPerLine.push(6)
        }
        regex = new RegExp(`[${seven}]`,'g')
        let [...result7] = digits[i].matchAll(regex)
        if(result7.length == seven.length && digits[i].length == seven.length){
            resultPerLine.push(7)
        }
        regex = new RegExp(`[${eigth}]`,'g')
        let [...result8] = digits[i].matchAll(regex)
        if(result8.length == eigth.length && digits[i].length == eigth.length){
            resultPerLine.push(8)
        }
        regex = new RegExp(`[${nine}]`,'g')
        let [...result9] = digits[i].matchAll(regex)
        if(result9.length == nine.length && digits[i].length == nine.length){
            resultPerLine.push(9)
        }
    }
    let resultNumber = resultPerLine.join('')
    finalResultNumber += parseInt(resultNumber)
});
console.log(finalResultNumber)
