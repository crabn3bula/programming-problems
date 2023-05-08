/**
 * https://leetcode.com/problems/apply-transform-over-each-element-in-array
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i);
  }
  return result;
};