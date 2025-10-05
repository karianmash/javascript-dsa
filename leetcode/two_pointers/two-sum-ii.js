
/**
 * @problem Two Sum II – Input Array is Sorted
 * Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number. 
 * Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.
 * Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length 2.
 * You may not use the same element twice.
 * Your solution must use only constant extra space.
 *
 * @example
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
 *
 * @solution
 * This problem is a perfect fit for the two-pointers pattern because the input array is sorted.
 * 1. Initialize `left` pointer at the start of the array (index 0) and `right` pointer at the end.
 * 2. Loop until the pointers cross.
 * 3. Calculate the sum of the values at the `left` and `right` pointers.
 * 4. If the sum equals the target, we have found our solution.
 * 5. If the sum is less than the target, we need a larger value, so we move the `left` pointer to the right.
 * 6. If the sum is greater than the target, we need a smaller value, so we move the `right` pointer to the left.
 */
function twoSum(numbers, target) {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1]; // Adjust for 1-based indexing
    if (sum < target) left++;
    else right--;
  }
  return [];
}

// Example
console.log(twoSum([2,7,11,15], 9)); // [1,2]
