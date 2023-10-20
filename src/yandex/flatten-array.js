/**
 * @param {any[]} arr
 */
function flatten(list) {
  const res = [];

  const stack = [...list];

  while (stack.length) {
    const el = stack.pop();

    if (Array.isArray(el)) {
        stack.push(...el)
    } else {
        res.unshift(el)
    }
  }

  return res;
}

module.exports = flatten;

// [1, 2, [3, 4], 5] -> [1, 2, 3, 4, 5]
