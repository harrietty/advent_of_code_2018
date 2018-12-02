const fs = require('fs');

const nums = fs
  .readFileSync('./input.txt', 'utf8')
  .split('\n')
  .map(Number);

const seen = [];

let found = false;

while (!found) {
  for (let i = 0; i < nums.length; i++) {
    let total = seen.length ?
      seen[seen.length - 1] + nums[i] :
      0 + nums[i];
    
    if (seen.includes(total)) {
      found = true;
      console.log(total);
      console.log(seen.length);
      break;
    }

    seen.push(total);
  }
}
