const getImport = require('../getInput');

const compare = (first, second, third) => {
  let i = 0;

  while(i <= first.length) {
    const iter = first[i];
    if(second.indexOf(iter) > -1 && third.indexOf(iter) > -1) {
      // ASCII of 'a' is 97 but if we want to assign 'a' as 1, offset the ASCII value by 96 (97 - 1)
      // ASCII of 'A' is 65 but if we want to assign 'A' as 27, offset the ASCII value by 38 (65 - 27)
      const offset = (iter == iter.toLowerCase()) ? 96 : 38;
      return iter.charCodeAt(0) - offset;
    }

    i++;
  }
}

const parttwo = () => {
  let count = 0;
  const sacks = getImport().split(/\n/);

  for(i = 0; i < sacks.length; i+=3) {
    count = count + compare(sacks[i], sacks[i+1], sacks[i+2]);
  }

  return count;
}

const answer = parttwo();
console.log('Answer: ', answer);