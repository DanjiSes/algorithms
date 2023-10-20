/**
 * Дана двумергая двоичная сетка m на n, которая представляет собой карту «1» (земля) и «0» (вода), верните количество островов.
 
 * Остров окружен водой и образован путем соединения соседних земель по горизонтали или вертикали. Вы можете предположить, что все четыре края сетки окружены водой.
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function dfs(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] === "0"
    ) {
      return;
    }

    grid[row][col] = "0";

    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
}

module.exports = numIslands;
