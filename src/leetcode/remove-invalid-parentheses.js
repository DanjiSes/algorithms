/**
 * Remove Invalid Parentheses
 *
 * Given a string s that contains parentheses and letters, remove the 
 * minimum number of invalid parentheses to make the input string 
 * valid.
 * 
 * Return a list of unique strings that are valid with the minimum 
 * number of removals. You may return the answer in any order.
 */

function isValid(s) {
  let balance = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      balance++;
    } else if (s[i] === ")") {
      balance--;
      if (balance < 0) {
        return false; // Unbalanced closing parenthesis
      }
    }
  }
  return balance === 0; // If balance is zero, it's a valid string
}

function removeInvalidParentheses(s) {
  /** @type {Set<string>} */
  const results = new Set();
  /** @type {string[]} */
  const queue = [];
  /** @type {Set<string>} */
  const visited = new Set();

  queue.push(s);
  visited.add(s);

  let found = false;

  while (queue.length > 0) {
    const queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      const currentStr = queue.shift();

      if (isValid(currentStr)) {
        results.add(currentStr);
        found = true;
      }

      if (!found) {
        for (let j = 0; j < currentStr.length; j++) {
          if (currentStr[j] !== "(" && currentStr[j] !== ")") {
            continue; // Skip non-parenthesis characters
          }

          const nextStr = currentStr.slice(0, j) + currentStr.slice(j + 1);

          if (!visited.has(nextStr)) {
            queue.push(nextStr);
            visited.add(nextStr);
          }
        }
      }
    }

    if (found) {
      break; // Stop BFS if valid strings are found
    }
  }

  return Array.from(results);
}

module.exports = removeInvalidParentheses