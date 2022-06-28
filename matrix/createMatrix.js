createMatrix = (r, c, f) => {
  const matrix = [];
  const row = [];

  for (j = 0; j < c; j++ ){
    row.push(f);
  }

  for (i = 0; i < r; i++) {
    matrix.push(row.map((f, cIndex)   => f(i, cIndex)));
  }

  return matrix;
}


console.log(createMatrix(8, 8,  (i, j) => [i, j]));