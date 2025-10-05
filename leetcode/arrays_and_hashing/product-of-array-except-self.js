
/**
 * @problem Product of Array Except Self
 * Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.
 * The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * @example
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * @solution
 * Since we cannot use division, we need to find another way to compute the product of all other elements.
 * A clever O(n) solution involves a two-pass approach using prefix and suffix products.
 *
 * 1. **Initialize Result Array**: Create a result array of the same size as `nums`, initialized with 1s.
 * 2. **First Pass (Prefix Products)**: Iterate through `nums` from left to right.
 *    - Maintain a `prefix` variable, initialized to 1.
 *    - For each index `i`, first set `result[i] = prefix`, then update `prefix` by multiplying it with `nums[i]`.
 *    - After this pass, `result[i]` will contain the product of all elements to the left of `i`.
 * 3. **Second Pass (Suffix Products)**: Iterate through `nums` from right to left.
 *    - Maintain a `suffix` variable, initialized to 1.
 *    - For each index `i`, first multiply the existing `result[i]` by the `suffix`, then update `suffix` by multiplying it with `nums[i]`.
 *    - After this pass, `result[i]` will have been multiplied by the product of all elements to its right.
 * 4. The `result` array now contains the final answer.
 */
function productExceptSelf(nums) {
  const res = Array(nums.length).fill(1);
  let prefix = 1;
  let suffix = 1;
  
  // First pass: calculate prefix products
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }
  
  // Second pass: calculate suffix products and multiply
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }
  return res;
}

console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
