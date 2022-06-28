createMatrix = (r, c) => {
  const matrix = [];
  const row = [];

  for (j = 0; j <= c; j++ ){
    row.push([]);
  }

  for (i = 0; i <= r; i++) {
    matrix.push(row);
  }

  return matrix;
}


console.log(createMatrix(10, 10 ));