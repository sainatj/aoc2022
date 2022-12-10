const getImport = require('../getInput');

getSignalStrength = (cycle, cx) => cycle * Number(cx);

const partone = () => {
  const res = getImport()
    .split(/\n/);

    let cycleCounter = 0;
    let totalValue = 1;

    let a,b,c,d,e,f = 0;

    res.map(ins => {
      const [instruction, val=0] = ins.split(/\s/g);

      if(instruction.indexOf('add') > -1) {
        cycleCounter += 1;
      } else if (instruction.indexOf('noop' > -1)) {
        cycleCounter += 1;
      }

      if(cycleCounter == 20 || cycleCounter == 19) {
        a = getSignalStrength(20, totalValue);
      }
      if(cycleCounter == 60 || cycleCounter == 59) {
        b = getSignalStrength(60, totalValue);
      }
      if(cycleCounter == 100) {
        c = getSignalStrength(100, totalValue);
      }
      if(cycleCounter == 140) {
        d = getSignalStrength(140, totalValue);
      }
      if(cycleCounter == 179) {
        e = getSignalStrength(180, totalValue);
      }
      if(cycleCounter == 219) {
        f = getSignalStrength(220, totalValue);
      }

      totalValue += Number(val);

      if(instruction.indexOf('add') > -1) {
        cycleCounter += 1;
      }
    })

    return a+b+c+d+e+f;
}

const answer = partone();
console.log('Answer:', answer);