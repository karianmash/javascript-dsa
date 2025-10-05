
/**
 * @problem
 * Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.
 * Notice that the solution set must not contain duplicate triplets.
 *
 * @example
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 *
 * @solution
 * This problem can be efficiently solved by combining sorting with the two-pointers technique. A brute-force approach with three nested loops would be O(n^3), which is too slow.
 *
 * 1. **Sort the Array**: First, sort the input array `nums`. This is crucial and costs O(n log n). Sorting helps us easily handle duplicates and use the two-pointer approach.
 * 2. **Iterate with the First Pointer**: Iterate through the sorted array with a for loop, using the index `i` as our first pointer. This loop will go from the start up to `nums.length - 2`.
 *    - **Skip Duplicates**: If the current element `nums[i]` is the same as the previous one, we should skip it to avoid duplicate triplets. We can check `if (i > 0 && nums[i] === nums[i - 1]) continue;`.
 * 3. **Use Two Pointers for the Remaining Pair**: For each `nums[i]`, we need to find two other numbers in the rest of the array that sum up to `-nums[i]`.
 *    - Initialize a `left` pointer at `i + 1` and a `right` pointer at `nums.length - 1`.
 *    - Loop while `left < right`:
 *      - Calculate the `currentSum = nums[i] + nums[left] + nums[right]`.
 *      - If `currentSum` is 0, we found a triplet. Add it to our results. Then, we must move both pointers and skip any subsequent duplicates. Increment `left` and decrement `right`. While `nums[left]` is the same as the previous `left`, keep incrementing `left`. Do the same for `right`.
 *      - If `currentSum` is less than 0, we need a larger sum, so increment `left`.
 *      - If `currentSum` is greater than 0, we need a smaller sum, so decrement `right`.
 * 4. **Return Result**: Return the list of found triplets.
 */

const threeSum = (nums) => {
  const result = [];
  // 1. Sort the array.
  nums.sort((a, b) => a - b);

  // 2. Iterate with the first pointer.
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for the first element of the triplet.
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // 3. Use two pointers for the remaining part of the array.
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      if (currentSum === 0) {
        // Found a triplet.
        result.push([nums[i], nums[left], nums[right]]);

        // Move pointers and skip duplicates for the second and third elements.
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (currentSum < 0) {
        // Sum is too small, need a larger number.
        left++;
      } else {
        // Sum is too large, need a smaller number.
        right--;
      }
    }
  }

  return result;
};

// Example Usage:
const nums = [-1, 0, 1, 2, -1, -4];
console.log(`Input: nums = [${nums}]`);
const result = threeSum(nums);
console.log('Output:', JSON.stringify(result)); // Output: [[-1,-1,2],[-1,0,1]]
