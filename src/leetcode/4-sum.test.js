const fourSum = require("./4-sum")

test.each([
    [[1,0,-1,0,-2,2], 0, [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]],
    [[2, 2, 2, 2, 2], 8, [[2, 2, 2, 2]]]
])('%j, %s -> %j', (nums, target, expected) => {
    expect(fourSum(nums, target)).toStrictEqual(expected)
})