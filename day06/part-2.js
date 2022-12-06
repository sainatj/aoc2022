const getImport = require('../getInput');

const parttwo = () => {
  let index = -1;
  const sequenceLength = 14;
  
  getImport()
    .split(/\n/)
    .map(message => {

      let i = 0;
      let marker = '';
      
      while(i < message.length) {
        const markerIndex = marker.indexOf(message[i]);

        if (markerIndex > -1) {
          marker = marker.substring(markerIndex+1, message.length);
        }

        marker += message[i];

        i++;

        if(marker.length == sequenceLength) {
          index = message.indexOf(marker) + sequenceLength;
          break;
        }
      }
    });

    return index;
};

const answer = parttwo();
console.log('Answer: ', answer);
