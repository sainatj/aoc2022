const getImport = require('../getInput');

// First char is what P1 (Player 1) chooses
// A - 1 (rock)
// B - 2 (paper)
// C - 3 (scissors)

// Second char is how P2 (Player 2) should end the round
// X - Lose
// Y - Draw
// Z - Win

const stratMap = {
  'A X': 3 + 0, // P2 loses, so plays scissors
  'A Y': 1 + 3, // P2 draws, so plays rock
  'A Z': 2 + 6, // P2 wins, so plays paper
  'B X': 1 + 0,
  'B Y': 2 + 3,
  'B Z': 3 + 6,
  'C X': 2 + 0,
  'C Y': 3 + 3,
  'C Z': 1 + 6,
};

const parttwo = () => {
  let totalCount = 0;

  getImport()
    .split(/\n/)
    .map(pair => {
      totalCount += stratMap[pair];
    });

    return totalCount;
}

const answer = parttwo();
console.log('Answer: ', answer);