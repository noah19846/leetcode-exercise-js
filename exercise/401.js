/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  if (turnedOn > 8) {
    return []
  }

  let result = []

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (
        i.toString(2).replace(/0/g, '').length +
          j.toString(2).replace(/0/g, '').length ==
        turnedOn
      ) {
        result.push(`${i}:${j <= 9 ? '0' + j : j}`)
      }
    }
  }
  return result
}

var readBinaryWatch = function (turnedOn) {
  if (turnedOn > 8) return []
  const ret = []
  const dfs = (n, start, hour, minute) => {
    if (hour > 11 || minute > 59) return
    if (n === 0) {
      return ret.push(`${hour}:${minute > 9 ? minute : '0' + minute}`)
    }
    for (let i = start; i < 10; i++) {
      dfs(
        n - 1,
        i + 1,
        hour + (i > 5 ? 1 << (i - 6) : 0),
        minute + (i > 5 ? 0 : 1 << i)
      )
    }
  }
  dfs(turnedOn, 0, 0, 0)
  return ret
}
