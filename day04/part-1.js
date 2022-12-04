const getImport = require('../getInput');

const partone = () => {
  let i = 0;
  let count = 0;
  const pairs = getImport().split('\n');

  while(i < pairs.length) {
    const [firstPair, secondPair] = pairs[i].split(/\,/);
    const [firstLow, firstHigh] = firstPair.split(/\-/);
    const [secondLow, secondHigh] = secondPair.split(/\-/);

    const firstLowNum = Number(firstLow);
    const firstHighNum = Number(firstHigh);
    const secondLowNum = Number(secondLow);
    const secondHighNum = Number(secondHigh);

    count += (
      ((firstLowNum <= secondLowNum) && (firstHighNum >= secondHighNum)) ||
      ((secondLowNum <= firstLowNum) && (secondHighNum >= firstHighNum))
    ) ? 1 : 0;

    i++;
  };

  return count;
}
const answer = partone();
console.log('Answer: ', answer);
