createMatrix = (r, c) => {
  let matrix = [];

  for (i = 0; i <= r; i++) {
    matrix[i] = [];
  }

  return matrix;
}


console.log(createMatrix(256));