const fs = require('fs');
const {solutionPart2} = require('./');

const input = fs.readFileSync('./input.txt', 'utf-8');

console.log(solutionPart2(input));