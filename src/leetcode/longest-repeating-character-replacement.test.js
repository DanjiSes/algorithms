const characterReplacement = require("./longest-repeating-character-replacement")

test.each([
    ["ABAB", 2, 4],
    ["AABABBA", 1, 4]
])('%s, %s -> %s', (s, k, expected) => {
    expect(characterReplacement(s, k)).toBe(expected)
})