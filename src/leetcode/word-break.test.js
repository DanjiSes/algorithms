const wordBreak = require("./word-break")

test.each([
    ["leetcode", ["leet","code"], true],
    ["applepenapple", ["apple","pen"], true],
    ["catsandog", ["cats","dog","sand","and","cat"], false]
])('%s, %j -> %s', (str, words, expected) => {
    expect(wordBreak(str, words)).toBe(expected)
})