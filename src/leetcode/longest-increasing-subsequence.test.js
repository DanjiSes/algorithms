const lengthOfLIS = require('./longest-increasing-subsequence')

test.each([
    [[10,9,2,5,3,7,101,18], 4],
    [[0,1,0,3,2,3], 4],
    [[7,7,7,7,7,7,7], 1]
])('%j -> %s', (sequence, expected) => {
    expect(lengthOfLIS(sequence)).toBe(expected)
})