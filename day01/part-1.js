const getImport = require('../getInput');

const partone = () => {
  const resultsArray = [];

  getImport()
    .split(/\n\n/)
    .map(match => {
      const res = match
        .split(/\n/)
        .map(item => Number(item));

      resultsArray.push(
        res.reduce((acc, cur) => acc+cur, 0)
      );
  });
  
  return Math.max(...resultsArray);
}

const answer = partone();
console.log('Answer: ', answer);