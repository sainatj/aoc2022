const getImport = require('../getInput');

// Values
// Rock 1    A or X
// Paper 2   B or Y
// Scissor 3  C or Z

const stratMap = {
  'A X': 1 + 3,
  'A Y': 2 + 6,
  'A Z': 3 + 0,
  'B X': 1 + 0,
  'B Y': 2 + 3,
  'B Z': 3 + 6,
  'C X': 1 + 6,
  'C Y': 2 + 0,
  'C Z': 3 + 3,
};

// Strategy
// A X -> 1 (rock) + 3 (draw)
// A Y -> 2 (paper) + 6 (win)
// A Z -> 3 (paper) + 0 (loss)

// B X -> 1 (rock) + 0 (loss)
// B Y -> 2 (paper) + 3 (draw)
// B Z -> 3 (scissor) + 6 (win)

// C X -> 1 (rock) + 6 (win)
// C Y -> 2 (paper) + 0 (loss)
// C Z -> 3 (scissor) + 3 (draw)

const partone = () => {
  let totalCount = 0;

  getImport()
    .split(/\n/)
    .map(pair => {
      totalCount += stratMap[pair];
    });

    return totalCount;
}

const answer = partone();
console.log('Answer: ', answer);