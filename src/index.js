module.exports = function solveSudoku(matrix) {
  // your solution
  let grid = matrix; 
  let cell = findUnassignedLocation(grid, 0, 0);
  let row = cell[0];
  let col = cell[1];
 
  //if table is filled
  if (row == -1) {
    return true;
  }
  //if table isn't filled
  for (let num = 1; num <= 9; num++) {
    if (isConditionOk(grid, row, col, num)) {
      grid[row][col] = num;
      if (solveSudoku(grid)) { 
        return grid;
      }
 // mark cell as empty (with 0)
      grid[row][col] = 0;
    }
  }
  return false;
}
 //this function searches empty cells
  function findUnassignedLocation(grid, row, col) {
    for (; row < 9 ; col = 0, row++) {
      for (; col < 9 ; col++) {
        if (grid[row][col] == 0) {
          return [row, col];
        }   
      }
    }
    return [-1, -1];
  }
 //This function checks matches in row, col and box.
  function isConditionOk(grid, row, col, num) {
    return isRowOk(grid, row, num) && 
           isColOk(grid, col, num) && 
           isSquareOk(grid, row, col, num);
  }
 //This function checks matches in rows
  function isRowOk(grid, row, num) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === num) {
        return false;
      }
    }
    return true;
  }
  //This function checks matches in columns
  function isColOk(grid, col, num) {
    for (let row = 0; row < 9; row++) {
      if (grid[row][col] === num) {
          return false;
      }
    }
    return true;
  }
  //This function checks three conditions: matches in row, col, square
  function isSquareOk(grid, row, col, num) {
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;
 
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (grid[row + r][col + c] === num) {
          return false; 
        }
      }
    }
      return true;
  }

