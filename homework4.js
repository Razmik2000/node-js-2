const fs = require('fs');
const newTxt = fs.readFileSync('./input.txt','utf-8').split(' ').join('-');
fs.writeFileSync( 'write.txt', newTxt);