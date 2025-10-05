
/**
 * @problem
 * Given two strings `s` and `t`, return the minimum window in `s` which will contain all the characters in `t`. If there is no such window in `s` that covers all characters in `t`, return the empty string "".
 * Note that the order of characters does not matter, but the frequency does. The window must contain at least as many of each character as there are in `t`.
 *
 * @example
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 *
 * @solution
 * This is a challenging problem and a prime example of a dynamic sliding window.
 *
 * 1. **Frequency Map for `t`**: First, create a frequency map of the characters in `t`. This map will tell us which characters we need to find and how many of each.
 * 2. **Initialize Pointers and Counters**: 
 *    - `left` pointer at 0.
 *    - `windowFreq`: A map to store the character frequencies within our current sliding window.
 *    - `have`: A counter for how many of the required characters we currently have in our window (matching the frequency in `t`).
 *    - `need`: The total number of unique characters we need from `t` (i.e., the size of `t`'s frequency map).
 *    - `res`: An array `[start, end]` to store the indices of the smallest valid window found so far, and `resLen` to store its length.
 * 3. **Expand the Window**: Iterate through `s` with a `right` pointer to expand the window.
 *    - Add the character `s[right]` to our `windowFreq` map.
 *    - If `s[right]` is a character we need (i.e., it's in `t`'s map) AND its count in `windowFreq` now matches its required count in `t`'s map, increment `have`.
 * 4. **Shrink the Window**: Once `have` equals `need`, it means our current window is valid (it contains all required characters). Now, we try to shrink it from the left to find the smallest possible valid window.
 *    - While `have === need`:
 *      - If the current window is smaller than `resLen`, update `res` and `resLen`.
 *      - Remove `s[left]` from our window by decrementing its count in `windowFreq`.
 *      - If `s[left]` is a required character AND its count in `windowFreq` just dropped below its required count in `t`'s map, decrement `have`. This will break the inner loop, and we'll go back to expanding the window.
 *      - Increment `left` to shrink the window.
 * 5. **Return Result**: After the main loop, if `resLen` is still at its initial large value, no valid window was found. Otherwise, use the indices in `res` to slice the substring from `s`.
 */

const minWindow = (s, t) => {
  if (t === "") return "";

  // 1. Create frequency maps.
  const tFreq = new Map();
  for (const char of t) {
    tFreq.set(char, (tFreq.get(char) || 0) + 1);
  }

  const windowFreq = new Map();
  let have = 0;
  const need = tFreq.size;
  let left = 0;
  let res = [-1, -1];
  let resLen = Infinity;

  // 3. Expand the window with the right pointer.
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    windowFreq.set(char, (windowFreq.get(char) || 0) + 1);

    if (tFreq.has(char) && windowFreq.get(char) === tFreq.get(char)) {
      have++;
    }

    // 4. Shrink the window when it's valid.
    while (have === need) {
      // Update result if this window is smaller.
      if ((right - left + 1) < resLen) {
        res = [left, right];
        resLen = right - left + 1;
      }

      // Shrink from the left.
      const leftChar = s[left];
      windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);

      if (tFreq.has(leftChar) && windowFreq.get(leftChar) < tFreq.get(leftChar)) {
        have--;
      }
      left++;
    }
  }

  // 5. Return the final result.
  const [start, end] = res;
  return resLen === Infinity ? "" : s.substring(start, end + 1);
};

// Example Usage:
const s = "ADOBECODEBANC";
const t = "ABC";
console.log(`Input: s = "${s}", t = "${t}"`);
const result = minWindow(s, t);
console.log(`Output: "${result}"`); // Output: "BANC"

const s2 = "a";
const t2 = "a";
console.log(`Input: s = "${s2}", t = "${t2}"`);
const result2 = minWindow(s2, t2);
console.log(`Output: "${result2}"`); // Output: "a"

const s3 = "a";
const t3 = "aa";
console.log(`Input: s = "${s3}", t = "${t3}"`);
const result3 = minWindow(s3, t3);
console.log(`Output: "${result3}"`); // Output: ""
