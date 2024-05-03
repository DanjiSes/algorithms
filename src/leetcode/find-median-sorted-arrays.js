let c = 0;

function findMedianSortedArrays(nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  const isEven = totalLength % 2 === 0;

  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  nums1;
  nums2;

  const m = nums1.length;
  const n = nums2.length;

  m;
  n;

  let low = 0;
  let high = m;

  low;
  high;

  while (low <= high) {
    low;
    high;

    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((totalLength + 1) / 2) - partitionX;

    partitionX;
    partitionY;

    const maxLeftA = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minRightA = partitionX === m ? Infinity : nums1[partitionX];

    maxLeftA;
    minRightA;

    const maxLeftB = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minRightB = partitionY === n ? Infinity : nums2[partitionY];

    maxLeftB;
    minRightB;

    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if (isEven) {
        return (
          (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
        );
      } else {
        return Math.max(maxLeftA, maxLeftB);
      }
    } else if (maxLeftA > minRightB) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
}

const result = findMedianSortedArrays(
  [7, 8, 9],
  [2, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 7, 8, 9]
);

result;

c;

module.exports = findMedianSortedArrays;
