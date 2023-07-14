const fs = require('fs');
const { stringify } = require('querystring');

let fileString = fs.readFileSync('./input.txt').toString()

fileString = fileString.replace(/K:/g, "Kevin: ")
fileString = fileString.replace(/E:/g, "Eric: ");


const charArray = fileString.split("");
let lineLength = 1;
for (let i = 0; i < charArray.length; i++) {

    let prevChar = charArray[i - 1];
    if (prevChar === '\n' || !prevChar) {
        charArray[i] = String(lineLength) + ". " + charArray[i]
        lineLength++
    }

}

fileString = charArray.join("")


fs.writeFileSync('output.txt', fileString)



