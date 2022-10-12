const {readFileSync} = require('fs')
// read the file
const fileContent = readFileSync(`.\\2021\\4\\input.txt`);
// split the file into an array of strings
const array = fileContent.toString().split('\n')
const [bingo, ...tables] = array
const bingoInput = bingo.split(',')

//parse tables strings into array of 'string numbers'
let table = []
let tablelist = []
tables.forEach((item) => {
    item = item.replace('\r','')
    if(item != '' ){
        table.push(item.replace('  ', ' ').split(' ').filter(i => i))
    } 
    if(table.length == 5){
        tablelist.push(table)
        table = []
    }
})

//declare Sheet class
class Sheet {
    constructor(tableRows){
        this.rows = tableRows;
        this.columns = []
        this.counterRowStorage = {}
        this.counterColumnStorage = {}
        this.winnerSheet = false
        this.disabled = false
        this.markedNumbers = []
        this.unMarkedNumbers = []
        this.lastNumber = undefined
        for (let k = 0; k < tableRows[0].length; k++) {
            let column = []
            for (let i = 0; i < tableRows.length; i++) {
                const row = tableRows[i];   
                column.push(row[k])
            }
            this.columns.push(column)
        }
    } 

    rowCount(number){  
        let count
        for (let i = 0; i < this.rows.length; i++) {
            const row = this.rows[i];
            if(row.includes(number) && !this.unMarkedNumbers.includes(number)){
                if(!this.markedNumbers.includes(number)){
                    this.markedNumbers.push(number)
                }                count = this.counterRowStorage[i]
                this.counterRowStorage[i] = count ? count + 1 : 1;
                if(this.counterRowStorage[i] == 5){
                    this.lastNumber = number
                    this.winnerSheet = true
                }
            } 
        }
    }
    columnCount(number){
        let count
        for (let i = 0; i < this.columns.length; i++) {
            const column = this.columns[i];
            if(column.includes(number) && !this.unMarkedNumbers.includes(number)){
                if(!this.markedNumbers.includes(number)){
                    this.markedNumbers.push(number)
                }
                count = this.counterColumnStorage[i]
                this.counterColumnStorage[i] = count ? count + 1 : 1;
                if(this.counterColumnStorage[i] == 5){
                    this.lastNumber = number
                    this.winnerSheet = true
                }
            }
        }
    }

    //calculates winningResult 
    getWinningResult(){
        for (let p = 0; p < this.rows.length; p++) {
            let rowUnique = this.rows[p];
            for (let i = 0; i < rowUnique.length; i++) {
                const rowNumber = rowUnique[i];
                this.unMarkedNumbers.push(rowNumber)
                if(this.markedNumbers.includes(rowNumber)){
                    const index = this.unMarkedNumbers.indexOf(rowNumber)
                    if(index > -1) {
                        this.unMarkedNumbers.splice(index, 1)
                    }
                }
            }
        }
        let sum = 0;
        for (let i = 0; i < this.unMarkedNumbers.length; i++) {
          const currentElementToSum = this.unMarkedNumbers[i]
          if(typeof currentElementToSum == `number`){
            sum += currentElementToSum;
          } else if (typeof currentElementToSum == `string` && !isNaN(currentElementToSum)){
            sum += parseInt(currentElementToSum)
          }
        }
        return sum * this.lastNumber
    }

    disableSheet(){
        this.disabled = true
    }
}

let winnerSheetsList = []
//Create Sheets and search for a winner Sheet
let tableListObj = []
tablelist.forEach((table) => tableListObj.push(new Sheet(table)))
let winnerTable = {}
for (let i = 0; i < bingoInput.length; i++) {
    const number = bingoInput[i];
    for (let j = 0; j < tableListObj.length; j++) {
        let sheetObj = tableListObj[j];
        if(!sheetObj.winnerSheet){
            sheetObj.rowCount(number)
        }
        if(sheetObj.winnerSheet && !sheetObj.disabled) {
            //console.log('row win');
            sheetObj.disableSheet()
            winnerTable = sheetObj
            
            // break
        }
        if(!sheetObj.winnerSheet){
            sheetObj.columnCount(number)
        }
        if(sheetObj.winnerSheet && !sheetObj.disabled) {
            //console.log('column win');
            sheetObj.disableSheet()
            winnerTable = sheetObj
            // break
        }
    }
    
    if(winnerTable && winnerTable.disabled){
        winnerSheetsList.push(winnerTable)
        winnerTable = {}
    }

}
//show winner table result
console.log(winnerSheetsList[winnerSheetsList.length-1].getWinningResult());