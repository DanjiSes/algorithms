/**
You are given an integer array nums.

You should move each element of nums into one of the two arrays A and B such that A and B are non-empty, and average(A) == average(B).

Return true if it is possible to achieve that and false otherwise.

Note that for an array arr, average(arr) is the sum of all the elements of arr over the length of arr.

Example 1:

Input: nums = [1,2,3,4,5,6,7,8]
Output: true
Explanation: We can split the array into [1,4,5,8] and [2,3,6,7], and both of them have an average of 4.5.

Example 2:

Input: nums = [3,1]
Output: false
**/

function splitArraySameAverage(A) {
  const sum = A.reduce((a, b) => a + b);
  const N = A.length;
  const dp = {};

  A.sort((a, b) => b - a);
  
  for (let i = 1; i < A.length; i++) {
    if ((sum * i) % N === 0 && dfs(0, (sum * i) / N, i)) {
      return true;
    }
  }

  return false;

  function dfs(start, target, k) {
    if (target === 0 && k === 0) return true;
    if (target < 0 || k === 0) return false;
    if (target > k * A[start]) return false;

    const hash = [start, target, k].join(",");

    if (dp[hash] !== undefined) {
      return dp[hash];
    }

    for (let i = start; i < N; i++) {
      if (dfs(i + 1, target - A[i], k - 1)) {
        return true;
      }
    }

    dp[hash] = false;
    
    return false;
  }
}

module.exports = splitArraySameAverage;
