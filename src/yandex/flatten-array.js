/**
 * @param {any[]} arr
 */
function flatten(list) {
  const stack = [{ list, cursor: 0 }];

  const res = [];

  while (stack.length) {
    const call = stack[stack.length - 1];

    const item = call.list[call.cursor];

    if (!item) {
      stack.pop();
      continue;
    }

    if (Array.isArray(item)) {
      stack.push({ list: item, cursor: 0 });
    } else {
      res.push(item);
    }

    call.cursor++;
  }

  return res;
}

module.exports = flatten;
