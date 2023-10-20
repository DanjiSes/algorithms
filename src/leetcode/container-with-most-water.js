/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    ans = Math.max(ans, Math.min(height[left], height[right]) * (right - left));

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};

module.exports = maxArea;
