/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const VOWELS = 'aeiouAEIOU';
    const arr = [...s];

    for(let i = 0, j = arr.length - 1; i < j; i++, j--) {
        while (!VOWELS.includes(arr[i]) && i < j) {
            i++;
        }

        while (!VOWELS.includes(arr[j]) && i < j) {
            j--;
        }

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr.join('');
};

module.exports = reverseVowels;
