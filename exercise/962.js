/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  const len = nums.length
  let max = len - 1

  while (max > 0) {
    for (let i = 0; i < len - max; i++) {
      if (nums[i + max] >= nums[i]) {
        return max
      }
    }

    max = max - 1
  }

  return max
}
