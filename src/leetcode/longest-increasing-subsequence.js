/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    const len = nums.length;

    if (len === 0) return 0;

    const dp = new Array(len).fill(1);

    // Прохожу по каждому элементу массива
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            const a = nums[i], b = nums[j]

            if (a > b) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

module.exports = lengthOfLIS

/**
 * Ниже слишком усложненное решение которое не прошло по тайм лимиту
 */

// var lengthOfLIS = function(nums) {
//     let result = 0

//     function dfs(idx, depth) {
//         if (depth > result) result = depth

//         const n = nums[idx];

//         for (let i = idx; i < nums.length; i++) {
//             if (n < nums[i]) {
//                 dfs(i, depth + 1)
//             }
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         dfs(i, 1)
//     }

//     return result
// };
