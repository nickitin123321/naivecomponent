const createMatrix = require('./createMatrix.js');

test('', () => {
  expect(createMatrix(2, 2, () => 1)).toEqual([[1, 1], [1, 1]]);
})
