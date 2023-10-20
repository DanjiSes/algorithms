/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReachableIndex = 0; // Initialize the maximum reachable index

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReachableIndex) {
      // If we cannot reach this index, return false
      return false;
    }
    
    // Update the maximum reachable index based on the current element
    maxReachableIndex = Math.max(maxReachableIndex, i + nums[i]);

    if (maxReachableIndex >= nums.length - 1) {
      // If we can reach the last index or beyond, return true
      return true;
    }
  }

  return false; // Cannot reach the last index
};
module.exports = canJump