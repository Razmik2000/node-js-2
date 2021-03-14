const fs = require('fs');
const os = require('os');
const hw1 = fs.readFileSync('./homework1.js', 'utf-8');
const hw2 = fs.readFileSync('./homework2.js', 'utf-8');
const hw3 = fs.readFileSync('./homework3.js', 'utf-8');
const hw4 = fs.readFileSync('./homework4.js', 'utf-8');
const d = new Date();
const name = os.platform() + '_' + d.getHours() + '_' + d.getMinutes() + '_' + d.getSeconds();
fs.writeFileSync(name + '.txt', hw1 + hw2 + hw3 + hw4);