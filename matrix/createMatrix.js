createMatrix = (r, c) => {
  const matrix = [];
  const row = [];

  for (j = 0; j <= c; j++ ){
    row.push(Math.random().toString(36).substring(2,6));
  }

  for (i = 0; i <= r; i++) {
    matrix.push(row);
  }

  return matrix;
}


console.log(createMatrix(8, 8 ));