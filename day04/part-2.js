const getImport = require('../getInput');

const parttwo = () => {
  let i = 0;
  let count = 0;
  const pairs = getImport().split('\n');

  while(i < pairs.length) {
    const [firstPair, secondPair] = pairs[i].split(/\,/);
    const [firstLow, firstHigh] = firstPair.split(/\-/);
    const [secondLow, secondHigh] = secondPair.split(/\-/);

    const zero = Number(firstLow);
    const one = Number(firstHigh);
    const two = Number(secondLow);
    const three = Number(secondHigh);

    count += (
      (zero >= two && zero <=three) ||
      (one >= two && one <=three) ||
      (zero <= two) && (one >= three) ||
      (two <= zero) && (three >= one)
    ) ? 1 : 0;
  
    i++;
  };

  return count;
};

const answer = parttwo();
console.log('Answer: ', answer);
