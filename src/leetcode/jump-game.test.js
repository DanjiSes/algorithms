const canJump = require('./jump-game')

test.each([
    [[2,3,1,1,4], true],
    [[3,2,1,0,4], false]
])('%j -> %s', (nums, expected) => {
    expect(canJump(nums)).toBe(expected)
})