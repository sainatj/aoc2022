const fs = require('fs');

const getInput = () => {
  return fs.readFileSync('../input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return null;
    }

    return data;
  });
};

module.exports = getInput;