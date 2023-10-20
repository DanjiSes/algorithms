/**
 * @param {number[][]} cuboids
 * @return {number}
 */
function maxHeight(cuboids) {
  function rotate(cuboid) {
    return [...cuboid].sort((a, b) => a - b);
  }

  cuboids = cuboids.map(rotate);

  cuboids.sort((a, b) => b[0] * b[1] - a[0] * a[1]);

  const n = cuboids.length;

  const dp = cuboids.map((c) => c[2])

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (
        cuboids[i][0] <= cuboids[j][0] &&
        cuboids[i][1] <= cuboids[j][1] &&
        cuboids[i][2] <= cuboids[j][2]
      ) {
        dp[i] = Math.max(dp[i], dp[j] + cuboids[i][2]);
      }
    }
  }
  debugger
  return Math.max(...dp);
}

module.exports = maxHeight;
