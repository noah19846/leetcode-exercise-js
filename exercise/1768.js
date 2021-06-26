/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function(word1, word2) {
  const l1 = word1.length
  const l2 = word2.length

  if (l1 === 0) {
      return word2
  }

  if (l2 === 0) {
      return word1
  }

  let result = ''
  let i = 0

  while (i < l1 && i < l2) {
      result = `${result}${word1[i]}${word2[i]}`
      i = i + 1
  }

  if (i >= l1) {
      result = `${result}${word2.substr(i)}`
  } else if (i >= l2) {
      result = `${result}${word1.substr(i)}`
  }

  return result
};