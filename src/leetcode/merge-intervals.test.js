const merge = require('./merge-intervals')

test.each([
    [
        [[1,3],[2,6],[8,10],[15,18]],
        [[1,6],[8,10],[15,18]]
    ],
    [
        [[1, 4], [4, 5]],
        [[1, 5]]
    ],
    [
        [[1, 2], [5, 7], [4, 5]],
        [[1, 2], [4, 7]]
    ],
    [
        [[1,2]],
        [[1,2]]
    ],
    [
        [],
        []
    ]
])('%j -> %j', (intervals, expected) => {
    expect(merge(intervals)).toStrictEqual(expected)
})