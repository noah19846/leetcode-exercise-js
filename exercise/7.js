/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  if (x === 0) {
    return 0
  }

  let symbol = 1

  if (x < 0) {
    symbol = -1
    x = -x
  }

  x = symbol * Number(x.toString().split('').reverse().join(''))

  if (x > 2 ** 31 - 1 || x < -(2 ** 31)) {
    return 0
  }

  return x
}
