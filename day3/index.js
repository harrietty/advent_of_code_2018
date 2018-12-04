function getFabricCoords (input) {
  const [x, y] = input.match(/[0-9]+,[0-9]+/)[0].split(',').map(Number);
  const [w, h] = input.match(/[0-9]+x[0-9]+/)[0].split('x').map(Number);

  const coords = [];

  for (let i = y; i <= (h + y - 1); i++) {
    for (let j = x; j <= (w + x - 1); j++) {
      coords.push(`${j},${i}`);
    }
  }
  return coords;
}

function getFabricCoordsAsNumbers (input) {
  const [x, y] = input.match(/[0-9]+,[0-9]+/)[0].split(',').map(Number);
  const [w, h] = input.match(/[0-9]+x[0-9]+/)[0].split('x').map(Number);

  const coords = [];

  for (let i = y; i <= (h + y - 1); i++) {
    for (let j = x; j <= (w + x - 1); j++) {
      coords.push([j, i]);
    }
  }
  return coords;
}

function countDuplicateCoords (list) {
  const freq = list.reduce((acc, item) => {
    if (!acc[item]) acc[item] = 1;
    else acc[item]++;
    return acc;
  }, {});

  // console.log(freq);
  
  let totalDuplicates = 0;
  for (let key in freq) {
    if (freq[key] > 1) totalDuplicates++;
  }

  return totalDuplicates;
}

function solutionPart1 (input) {
  const res = input.split('\n')
  .map(getFabricCoords)
  .reduce((acc, arr) => acc.concat(arr), [])
  return countDuplicateCoords(res)
}

function solutionPart2 (input) {
  input = input.split('\n');
  const matrix = [];
  
  input.forEach((line) => {
    let id = line.match(/^#[0-9]+/)[0];
    const [x, y] = line.match(/[0-9]+,[0-9]+/)[0].split(',').map(Number);
    const [w, h] = line.match(/[0-9]+x[0-9]+/)[0].split('x').map(Number);
    for (let i = y; i <= (h + y - 1); i++) {
      for (let j = x; j <= (w + x - 1); j++) {
        if (!matrix[j]) matrix[j] = [];
        if (matrix[j][i]) matrix[j][i] = 'x'
        else matrix[j][i] = id;
      }
    }
  });
  
  for (let m = 0; m < input.length; m++) {
    let coords = getFabricCoordsAsNumbers(input[m]);
    let id = input[m].match(/^#[0-9]+/)[0];

    let coordsAreUnique = true;
    
    for (let r = 0; r < coords.length; r++) {
      if (matrix[coords[r][0]] && matrix[coords[r][0]][coords[r][1]] === 'x') coordsAreUnique = false;
    }
    if (coordsAreUnique) return id;
  }
  
}

module.exports = {
  getFabricCoords,
  countDuplicateCoords,
  solutionPart1,
  solutionPart2,
}

