/**
 * @problem Top K Frequent Elements
 * Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.
 *
 * @example
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 * @solution
 * This problem can be solved in two main steps:
 * 1. Count the frequency of each number in the array.
 * 2. Find the top `k` elements based on these frequencies.
 *
 * **Step 1: Frequency Counting**
 * A hash map is perfect for this. We can iterate through the `nums` array and store each number as a key and its frequency as the value.
 *
 * **Step 2: Finding Top K Elements (Bucket Sort)**
 *   a. Create an array of "buckets" where the index represents frequency.
 *   b. Iterate through our frequency map. For each number, add it to the bucket at the index corresponding to its frequency.
 *   c. Iterate through the buckets array from the end (highest frequency) and collect elements until we have `k`.
 */
function topKFrequent(nums, k) {
  const map = new Map();
  for (let n of nums) map.set(n, (map.get(n) || 0) + 1);
  
  const bucket = [];
  for (let [num, freq] of map) {
    if (!bucket[freq]) bucket[freq] = [];
    bucket[freq].push(num);
  }
  
  const res = [];
  for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
    if (bucket[i]) res.push(...bucket[i]);
  }
  return res;
}

console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1,2]