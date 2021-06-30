/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const len = stones.length
  let result = 0

  if (jewels.length < 1 || len < 1) {
    return 0
  }

  for (let i = 0; i < len; i++) {
    if (jewels.includes(stones[i])) {
      result = result + 1
    }
  }

  return result
}
