/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    p = p.split('').sort().join('')

    const step = p.length
    const result = []

    for (let i = 0; i < s.length; i++) {
        const substr = s.substring(i, i + step)

        if (substr.split('').sort().join('') === p) {
            result.push(i)
        }
    }

    return result
};

module.exports = findAnagrams;