const getImport = require('../getInput');

const compare = (firstHalf, secondHalf) => {
  let i = 0;

  while(i <= firstHalf.length) {
    const iter = firstHalf[i];
    if(secondHalf.indexOf(iter) > -1) {
      // ASCII of 'a' is 97 but if we want to assign 'a' as 1, offset the ASCII value by 96 (97 - 1)
      // ASCII of 'A' is 65 but if we want to assign 'A' as 27, offset the ASCII value by 38 (65 - 27)
      const offset = (iter == iter.toLowerCase()) ? 96 : 38;
      return iter.charCodeAt(0) - offset;
    };

    i++;
  }
}

const partone = () => {
  let count = 0;
  
  getImport()
    .split(/\n/)
    .map(stream => {
      const firstHalf = stream.substring(0, stream.length/2);
      const secondHalf = stream.substring(stream.length/2, stream.length);
      
      count = count + compare(firstHalf, secondHalf);
    });

  return count;
}

const answer = partone();
console.log('Answer: ', answer);
