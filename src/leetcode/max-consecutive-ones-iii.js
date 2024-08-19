/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  const n = nums.length;

  let left = 0;

  let zeroesInWindow = 0;

  let maxWindow = 0;

  for (let right = 0; right < n; right++) {
    if (nums[right] === 0) zeroesInWindow++;

    while (zeroesInWindow > k) {
      if (nums[left] === 0) zeroesInWindow--;

      left++;
    }

    maxWindow = Math.max(maxWindow, right - left + 1);
  }

  return maxWindow;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
