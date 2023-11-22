/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
  /** @type {number[]} */
  const queue = [];

  // Add start buses
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].includes(source)) {
      queue.push(i);
    }
  }

  // Add hash map with buses by stops
  const busesByStop = {};

  for (let i = 0; i < routes.length; i++) {
    for (let k = 0; k < routes[i].length; k++) {
      busesByStop[routes[i][k]] = busesByStop[routes[i][k]]
        ? [...busesByStop[routes[i][k]], i]
        : [i];
    }
  }

  let buses = 1;

  busesByStop;
  queue;

  while (queue.length) {
    const busIdx = queue.shift();
    const bus = routes[busIdx];

    bus;
    if (bus.includes(target)) return buses;

    buses++;

    for (let i = 0; i < bus.length; i++) {
      for (let k = 0; k < busesByStop[bus[i]].length; k++) {
        if (busesByStop[bus[i]][k] !== busIdx)
          queue.push(busesByStop[bus[i]][k]);
      }
    }

    return -1;
  }

  return -1;
};

console.log(
  numBusesToDestination(
    [[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]],
    15,
    12
  )
);

module.exports = numBusesToDestination;
