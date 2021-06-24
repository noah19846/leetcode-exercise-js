/**
 * @param {number[][]} points
 * @return {number}
 */

var ratio = function (a, b) {
  const denominator = a[0] - b[0]

  if (!denominator) {
    return Number.POSITIVE_INFINITY
  }

  return (a[1] - b[1]) / denominator
}

var maxPoints = function (points) {
  let len = points.length

  if (len < 3) {
    return len
  }

  let result = 2
  for (let i = 0; i < len - 1; i++) {
    const map = new Map()
    for (let j = i + 1; j < len; j++) {
      const k = ratio(points[i], points[j])
      let count = 2

      if (map.has(k)) {
        count = map.get(k) + 1
      }

      map.set(k, count)

      if (count > result) {
        result = count
      }
    }
  }
  return result
}
