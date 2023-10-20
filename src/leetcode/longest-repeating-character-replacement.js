/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const charCount = {};
  let mostRepiatCount = 0;
  
  let longest = 0;

  let left = 0;
  let right = 0;

  while (right < s.length) {
    const rightChar = s.charAt(right);

    charCount[rightChar] = (charCount[rightChar] || 0) + 1;
    mostRepiatCount = Math.max(mostRepiatCount, charCount[rightChar]);
    
    // Проверяю если в подстроке больше менее повтояющихся символов чем k
    while (right - left + 1 - mostRepiatCount > k) {
      const leftCharacter = s.charAt(left);
      // то уменьшаю кол-во левого символа на единицу
      charCount[leftCharacter] -= 1;
      // и двигаю левый указатель вправо
      left++;
    }

    longest = Math.max(longest, right - left + 1);

    right++;
  }

  return longest;
};

module.exports = characterReplacement;
