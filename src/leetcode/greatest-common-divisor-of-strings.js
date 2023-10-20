/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // check if any GCD str
    if (str1 + str2 !== str2 + str1) return '';

    // get GCD str length
    const [longest, shortest] = str1.length > str2.length ? 
        [str1.length, str2.length] :
        [str2.length, str1.length];
        
    const gcdLength = getGcdLength(longest, shortest);

    // return substr of gcd length
    return str1.slice(0, gcdLength);
};

const getGcdLength = (x, y) => {
    return (y === 0) 
        ? x
        : getGcdLength (y, x % y);
}

module.exports = gcdOfStrings