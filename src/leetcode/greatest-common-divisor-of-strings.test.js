const gcdOfStrings = require('./greatest-common-divisor-of-strings')

test.each([
    ["ABCABC", "ABC", "ABC"],
    ["ABABAB", "ABAB", "AB"],
    ["LEET", "CODE", ""]
])('%s" + "%s" -> "%s"', (str1, str2, expected) => {
    expect(gcdOfStrings(str1, str2)).toBe(expected)
})