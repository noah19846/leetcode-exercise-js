/**
 * @param {number} n
 * @return {number}
 */

var binaryGap = function (n) {
  let count = 0
  let lastOneIndex = -1
  let gap = 0
  let result = 0

  while (n !== 0) {
    const bit = n & 1

    if (bit === 1) {
      if (lastOneIndex !== -1) {
        gap = count - lastOneIndex

        if (gap > result) {
          result = gap
        }
      }
      lastOneIndex = count
    }

    n = n >>> 1
    count = count + 1
  }

  return result
}
