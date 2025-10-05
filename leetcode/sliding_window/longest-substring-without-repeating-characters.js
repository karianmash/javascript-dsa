/**
 * @problem Longest Substring Without Repeating Characters
 * Given a string `s`, find the length of the longest substring without repeating characters.
 *
 * @example
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * @solution
 * This is a classic problem that can be solved efficiently using the sliding window technique with a dynamic window size.
 * The "window" is the current substring we are examining. We want to expand this window as much as possible without including any repeating characters.
 *
 * 1. **Initialize**: We need a way to keep track of the characters currently in our window. A `Set` is perfect for this because it provides O(1) average time complexity for add, delete, and has (lookup) operations.
 *    - Initialize a `left` pointer (start of the window) at 0.
 *    - Initialize `maxLength` to 0.
 *    - Initialize an empty `charSet`.
 * 2. **Iterate with the Right Pointer**: We will iterate through the string with a `right` pointer (end of the window), from left to right.
 * 3. **Check for Duplicates**: For each character `s[right]`:
 *    - Check if the character is already in our `charSet`. If it is, we have a repeating character.
 *    - **Shrink the Window**: We must shrink our window from the left until the repeating character is removed. We do this in a loop: remove `s[left]` from the `charSet` and increment `left`.
 * 4. **Expand the Window**: After ensuring the current character `s[right]` is not in the window, we can add it to our `charSet`. This expands the window to the right.
 * 5. **Update Max Length**: The length of the current valid window is `right - left + 1`. We update `maxLength = Math.max(maxLength, right - left + 1)`.
 * 6. **Return Result**: After the `right` pointer has traversed the entire string, `maxLength` will hold the answer.
 *
 * This approach has a time complexity of O(n) because each character is visited by the `left` and `right` pointers at most once.
 */
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0, maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3