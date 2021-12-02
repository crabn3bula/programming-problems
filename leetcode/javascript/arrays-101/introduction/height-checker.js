/**
 * https://leetcode.com/problems/height-checker/
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
  let count = 0;
  const expected = [...heights].sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      count++;
    }
  }
  return count;
};