const partitionLabels = require("./partition-labels")

test.each([
    ["ababcbacadefegdehijhklij", [9,7,8]],
    ["eccbbbbdec", [10]]
])('%s -> %j', (str, expected) => {
    expect(partitionLabels(str)).toStrictEqual(expected)
})