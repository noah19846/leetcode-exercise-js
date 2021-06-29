/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const arr = [
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y'
  ]
  let result = ''

  while (columnNumber !== 0) {
    const r = columnNumber % 26

    result = `${arr[r]}${result}`
    columnNumber = Math.floor((columnNumber - (r || 26)) / 26)
  }

  return result
}
