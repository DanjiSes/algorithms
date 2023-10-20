const maxSlidingWindow = require("./sliding-window-maximum")

test.each([
    [[1,3,-1,-3,5,3,6,7], 3, [3,3,5,5,6,7]],
    [[1], 1, [1]]
])('%j, %s -> %j', (nums, k, expected) => {
    expect(maxSlidingWindow(nums, k)).toStrictEqual(expected)
})