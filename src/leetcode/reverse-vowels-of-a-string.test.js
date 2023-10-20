const reverseVowels = require('./reverse-vowels-of-a-string')

test.each([
    ["hello", "holle"],
    ["leetcode", "leotcede"]
])('%s -> %s', (str, expected) => {
    expect(reverseVowels(str)).toBe(expected)
})