
/**
 * @problem
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.
 *
 * @example
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * @solution
 * This is a classic use case for the two-pointers technique, with pointers starting at opposite ends.
 *
 * 1. **Sanitize the String**: First, we need to clean the input string by converting it to lowercase and removing all non-alphanumeric characters. A regular expression is great for this.
 * 2. **Initialize Pointers**: Create a `left` pointer starting at the beginning of the sanitized string (index 0) and a `right` pointer starting at the end (index `length - 1`).
 * 3. **Iterate and Compare**: Loop as long as the `left` pointer is less than the `right` pointer.
 *    - In each iteration, compare the characters at the `left` and `right` pointers.
 *    - If they are not the same, the string is not a palindrome, so we can immediately return `false`.
 *    - If they are the same, move the pointers closer to the center: increment `left` and decrement `right`.
 * 4. **Return Result**: If the loop completes without finding any mismatches, it means the string is a palindrome, and we can return `true`.
 *
 * This approach has a time complexity of O(n) because we iterate through the string at most once.
 */

const isPalindrome = (s) => {
  // 1. Sanitize the string: lowercase and remove non-alphanumeric characters.
  // The regex /[^a-z0-9]/g matches any character that is NOT a lowercase letter or a digit.
  const sanitizedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // 2. Initialize pointers.
  let left = 0;
  let right = sanitizedStr.length - 1;

  // 3. Iterate and compare characters from both ends.
  while (left < right) {
    if (sanitizedStr[left] !== sanitizedStr[right]) {
      // If characters don't match, it's not a palindrome.
      return false;
    }
    // Move pointers towards the center.
    left++;
    right--;
  }

  // 4. If the loop finishes, it's a palindrome.
  return true;
};

// Example Usage:
const s = "A man, a plan, a canal: Panama";
console.log(`Input: s = "${s}"`);
const result = isPalindrome(s);
console.log(`Output: ${result}`); // Output: true

const s2 = "race a car";
console.log(`Input: s = "${s2}"`);
const result2 = isPalindrome(s2);
console.log(`Output: ${result2}`); // Output: false
