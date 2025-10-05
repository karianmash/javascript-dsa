
/**
 * @problem
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * @example
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * @solution
 * We can solve this efficiently using a hash map (or a JavaScript `Map`).
 * The idea is to iterate through the array once. For each element `num`, we calculate its "complement" (`target - num`).
 *
 * 1. If the complement exists as a key in our map, it means we have found the two numbers that add up to the target. We can return the index of the complement (stored as the value in the map) and the index of the current number.
 * 2. If the complement is not in the map, we store the current number as a key and its index as the value. This way, we can find it in a future iteration if we encounter its complement.
 *
 * This approach has a time complexity of O(n) because we traverse the list containing n elements only once. Each lookup and insertion in the hash map takes constant time O(1) on average.
 */

const twoSum = (nums, target) => {
  // Create a new Map to store numbers we've seen and their indices.
  const numMap = new Map();

  // Iterate through the array.
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    // Check if the complement exists in the map.
    if (numMap.has(complement)) {
      // If it exists, we found our pair.
      return [numMap.get(complement), i];
    }

    // If the complement is not found, add the current number and its index to the map.
    numMap.set(num, i);
  }

  // If no solution is found (though the problem statement guarantees one),
  // you might throw an error or return an empty array, depending on requirements.
  return [];
};

// Example Usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(`Input: nums = [${nums}], target = ${target}`);
const result = twoSum(nums, target);
console.log(`Output: [${result}]`); // Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(`Input: nums = [${nums2}], target = ${target2}`);
const result2 = twoSum(nums2, target2);
console.log(`Output: [${result2}]`); // Output: [1, 2]
