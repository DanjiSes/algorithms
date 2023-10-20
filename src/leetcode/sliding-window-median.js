// @see https://leetcode.com/problems/sliding-window-median/solutions/520663/javascript-solution-beats-98-81/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const medianSlidingWindow = (nums, k) => {
	const res = []
	
    const wind = []
	const isKEven = k % 2 === 0
	const mid = k >> 1

	for (let i = 0; i < nums.length; i++) {
		binaryInsertion(wind, nums[i])

		if (wind.length > k) {
			binaryDeletion(wind, nums[i - k])
		}

		if (wind.length === k) {
			res.push(isKEven ? (wind[mid - 1] + wind[mid]) / 2 : wind[mid])
		}
	}

	return res
}

const binaryInsertion = (arr, target) => {
	let left = 0
	let right = arr.length

	while (left < right) {
		const mid = (left + right) >> 1

		if (target > arr[mid]) {
			left = mid + 1
		} else {
			right = mid
		}
	}

	arr.splice(left, 0, target)
}

const binaryDeletion = (arr, target) => {
	let left = 0
	let right = arr.length

	while (left < right) {
		const mid = (left + right) >> 1

		if (target === arr[mid]) {
			arr.splice(mid, 1)
			break
		} else if (target > arr[mid]) {
			left = mid + 1
		} else {
			right = mid
		}
	}
}

// Не прошло по execution time limit

// var medianSlidingWindow = function(nums, k) {
//     const res = []

//     for (let i = 0; i <= nums.length - k; i++) {
//         const wind = nums.slice(i, i + k)
        
//         wind.sort((a, b) => a - b)

//         const mid = Math.floor(k / 2)

//         if (k % 2 === 1) {
//             res.push(wind[mid])
//         } else {
//             res.push((wind[mid] + wind[mid - 1]) / 2)
//         }
//     }

//     return res
// };

module.exports = medianSlidingWindow