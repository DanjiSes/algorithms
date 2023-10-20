const maxArea = require("./container-with-most-water")

test.each([
    [[1,8,6,2,5,4,8,3,7], 49],
    [[1,1], 1]
])('%j -> %s', (height, expected) => {
    expect(maxArea(height)).toBe(expected)
})