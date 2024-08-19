/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;

  for (let row = 0; row < n / 2; row++) {
    for (let col = row; col < n - row - 1; col++) {
      console.log(row, col);

      // Swap the top-left and top-right cells in the
      // current group

      [matrix[row][col], matrix[col][n - 1 - row]] = [
        matrix[col][n - 1 - row],
        matrix[row][col],
      ];

      // Swap the top-left and bottom-right cells in the
      // current group
      [matrix[row][col], matrix[n - 1 - row][n - 1 - col]] = [
        matrix[n - 1 - row][n - 1 - col],
        matrix[row][col],
      ];

      // Swap the top-left and bottom-left cells in the
      // current group
      [matrix[row][col], matrix[n - 1 - col][row]] = [
        matrix[n - 1 - col][row],
        matrix[row][col],
      ];
    }
  }
  return matrix;
};

console.log(
  rotate([
    [1, 2, 3, 1],
    [4, 5, 6, 1],
    [7, 8, 9, 1],
    [7, 8, 9, 1],
  ])
);

// console.log(
//   rotate([
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//     [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
//     [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
//     [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
//     [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
//     [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
//     [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
//     [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
//   ])
// );
