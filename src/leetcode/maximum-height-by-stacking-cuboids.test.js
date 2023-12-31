const maxHeight = require('./maximum-height-by-stacking-cuboids')

test.each([
    [[[50,45,20],[95,37,53],[45,23,12]], 190],
    [[[38,25,45],[76,35,3]], 76],
    [[[7,11,17],[7,17,11],[11,7,17],[11,17,7],[17,7,11],[17,11,7]], 102]
])('%j -> %s', (cuboids, expected) => {
    expect(maxHeight(cuboids)).toBe(expected)
})