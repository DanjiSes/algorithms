const findAnograms = require('./find-all-anograms-in-string')

test.each([
    ['cbaebabacd', 'abc', [0, 6]],
    ['abab', 'ab', [0, 1, 2]],
    ['', '', []],
    ['aaaaaa', 'aa', [0, 1, 2, 3, 4]],
    ['abc', 'd', []]
])('%s, %s -> %s', (str, word, expected) => {
    expect(findAnograms(str, word)).toStrictEqual(expected)
})