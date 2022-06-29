const { createMatrix }  = require('./../createMatrix');

const base = (m1, m2) => {
  const m3 = [];

  console.log(m1, m2)

  m1.forEach((row, rIndex) => {
    row.forEach((m1Val, cIndex) => {
      const sum = m1Val * m2[cIndex] [rIndex];
      m3.push([sum])
    })
  });

  return m3;
}

console.log(base(createMatrix(4, 4, () => 2), createMatrix(4, 4, (i) => i)));