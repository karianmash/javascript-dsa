
/**
 * @problem Maximum Subarray (Kadane's Algorithm)
 * Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * @example
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * @solution
 * This is a classic problem that can be solved with a greedy approach known as Kadane's Algorithm, which is a form of dynamic programming.
 * The core idea is to iterate through the array and, at each position, decide whether it's better to extend the previous subarray or to start a new one.
 *
 * 1. Initialize two variables: `maxSoFar` and `currentMax`. Both should be initialized to the first element of the array.
 * 2. Iterate through the array starting from the second element.
 * 3. For each number, update `currentMax` by choosing the larger of two options:
 *    a) The number itself (i.e., starting a new subarray at this number).
 *    b) The number plus the `currentMax` of the previous subarray (i.e., extending the current subarray).
 * 4. After updating `currentMax`, update `maxSoFar` by comparing it with the new `currentMax`. `maxSoFar` will always hold the maximum sum found anywhere in the array.
 * 5. After the loop, `maxSoFar` is the answer.
 */
function maxSubArray(nums) {
  // Initialize currentMax and maxSoFar with the first element.
  let currentMax = nums[0];
  let maxSoFar = nums[0];

  // Iterate from the second element.
  for (let i = 1; i < nums.length; i++) {
    // Is it better to extend the subarray or start a new one?
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    // Did we find a new overall maximum?
    maxSoFar = Math.max(maxSoFar, currentMax);
  }
  return maxSoFar;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
