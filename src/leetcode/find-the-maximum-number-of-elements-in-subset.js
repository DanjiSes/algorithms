/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  if (nums[0] === 1) return nums.length;

  nums.sort((a, b) => b - a);

  nums;

  let max = 1;
  let center = 0;

  for (let i = 1; i < nums.length; i++) {
    const centerNum = nums[center];
    centerNum;

    if (centerNum % 2 !== 0) center = i;

    const num = nums[i];
    num;
  }

  return max;
};

console.log(maximumLength([5, 4, 1, 2, 2]), "=", 3);

module.exports = maximumLength;
