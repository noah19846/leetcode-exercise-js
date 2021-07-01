/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  const len = s.length
  let lastElm = s[0]

  if (len === 1) {
    return lastElm === '1'
  }

  let count1 = +lastElm
  let count0 = 1 - count1
  let temp1 = count1
  let temp0 = count0

  for (let i = 1; i < s.length; i++) {
    if (s[i] === '0') {
      if (lastElm === '0') {
        temp0 = temp0 + 1
      } else {
        temp0 = 1

        if (temp1 > count1) {
          count1 = temp1
        }
      }
    } else {
      if (lastElm === '1') {
        temp1 = temp1 + 1
      } else {
        temp1 = 1

        if (temp0 > count0) {
          count0 = temp0
        }
      }
    }

    lastElm = s[i]
  }

  if (lastElm === s[len - 2]) {
    if (lastElm === '0') {
      if (temp0 > count0) {
        count0 = temp0
      }
    } else {
      if (temp1 > count1) {
        count1 = temp1
      }
    }
  } else {
    if (lastElm === '0') {
      count0 = count0 || 1
    } else {
      count1 = count1 || 1
    }
  }

  return count1 > count0
}
