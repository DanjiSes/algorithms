/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const wind = [];

  const res = [];

  for (let i = 0; i < nums.length; i++) {
    binaryInsertion(wind, nums[i]);

    if (wind.length > k) {
      binaryDeletion(wind, nums[i - k]);
    }

    if (wind.length === k) {
      res.push(wind[wind.length - 1]);
    }
  }

  return res;
};

const binaryInsertion = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = (left + right) >> 1;

    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  arr.splice(left, 0, target);
};

const binaryDeletion = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = (left + right) >> 1;

    if (target === arr[mid]) {
      arr.splice(mid, 1);
      break;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
};

module.exports = maxSlidingWindow;
