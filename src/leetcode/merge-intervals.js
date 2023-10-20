/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i + 1][0] <= intervals[i][1]) {
            intervals[i][1] = intervals[i + 1][1]
            intervals.splice(i + 1, 1)
        }
    }

    return intervals
}

module.exports = merge