/**
 * @param {number | undefined} a
 * @param {number | undefined} b
 * @returns boolean
 */
function isNear(a, b) {
  return (
    a !== undefined && b !== undefined && Math.max(a, b) - Math.min(a, b) === 1
  );
}

/**
 * @param {number | undefined} a
 * @param {number | undefined} b
 * @returns boolean
 */
function isEqual(a, b) {
  return a !== undefined && b !== undefined && a === b;
}

/**
 * @param {number[]} list
 * @returns string
 */
function compress(list) {
  list.sort((a, b) => a - b);

  let result = "";

  for (let i = 0; i < list.length; i++) {
    const prev = list[i - 1];
    const curr = list[i];
    const next = list[i + 1];

    // Case 1: skip
    if (isEqual(curr, next) || (isNear(curr, next) && isNear(curr, prev)))
      continue;
    // Case 2: add range start
    else if (!isNear(curr, prev) && isNear(curr, next)) {
      result += `${curr}`;
    }
    // Case 3: add range end
    else if (
      isNear(curr, prev) && !isNear(curr, next)
    ) {
      result += `-${curr},`;
    }
    // Case 4: add single range
    else {
      result += `${curr},`;
    }
  }

  return result.replace(/,$/g, "");
}

module.exports = compress;
