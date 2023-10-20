/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
    const gcd = (x, y) => {
      if (x == 0) return y;
      return gcd(y % x, x);
    };
  
    const MOD = 1000000007;

    let lcm = (a * b) / gcd(a, b);
    let left = Math.min(a, b);
    let right = Math.min(a, b) * n;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      let x = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / lcm);
      
      if (x >= n) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return right % MOD;
  };
  
  module.exports = nthMagicalNumber