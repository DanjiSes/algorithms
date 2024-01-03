/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
  const result = [];

  var dfs = (idx = 1, sum = +num[0], ans = num[0]) => {
    if (idx === num.length && sum === target) result.push(ans);

    if (idx >= num.length) return;

    return (
      dfs(idx + 1, sum + +num[idx], ans + `+${num[idx]}`) ||
      dfs(idx + 1, sum - +num[idx], ans + `-${num[idx]}`) ||
      dfs(idx + 1, sum * +num[idx], ans + `*${num[idx]}`)
    );
  };

  dfs();

  return result;
};

console.log(addOperators("232", 8));
