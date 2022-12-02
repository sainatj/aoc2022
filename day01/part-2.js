const getImport = require('../getInput');

const parttwo = () => {
  const resultsArray = [];

  getImport()
    .split(/\n\n/)
    .map(match => {
      const res = match
        .split(/\n/)
        .map(item => Number(item));

      resultsArray.push(res.reduce((acc, cur) => acc+cur, 0));
  });

  return resultsArray
    .sort((x, y) => x - y)
    .reverse()
    .slice(0, 3)
    .reduce((acc, cur) => acc + cur, 0);
}

const answer = parttwo();
console.log('Answer: ', answer);