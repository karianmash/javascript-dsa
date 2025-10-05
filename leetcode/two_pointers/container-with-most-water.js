
/**
 * @problem
 * You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`-th line are `(i, 0)` and `(i, height[i])`.
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 *
 * @example
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 *
 * @solution
 * This problem can be solved efficiently using a two-pointer approach. A brute-force O(n^2) solution would check every pair of lines, but we can do better.
 *
 * 1. **Initialize Pointers and Max Area**: Start with a `left` pointer at the beginning of the array (index 0) and a `right` pointer at the end (index `height.length - 1`). Initialize a variable `maxArea` to 0.
 * 2. **Calculate Area and Update Max**: Loop as long as `left < right`.
 *    - The width of the container is `right - left`.
 *    - The height of the water is limited by the shorter of the two lines, so `h = Math.min(height[left], height[right])`.
 *    - The current area is `width * h`.
 *    - Update `maxArea = Math.max(maxArea, currentArea)`.
 * 3. **Move the Pointers**: This is the key step. To maximize the area, we want to find a taller line. The area is always limited by the shorter line. If we move the taller line's pointer inwards, the width will decrease, and the height will either stay the same or decrease. This can never increase the area. Therefore, it always makes sense to move the shorter line's pointer, in the hope of finding a taller line that could create a larger area.
 *    - If `height[left] < height[right]`, increment `left`.
 *    - Otherwise, decrement `right`.
 * 4. **Return Result**: After the loop finishes, `maxArea` will hold the maximum possible area.
 *
 * This approach has a time complexity of O(n) because the left and right pointers each traverse the array at most once.
 */

const maxArea = (height) => {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // Calculate the width of the container.
    const width = right - left;
    // The height is limited by the shorter of the two lines.
    const h = Math.min(height[left], height[right]);
    // Calculate the current area.
    const currentArea = width * h;

    // Update the maximum area found so far.
    maxArea = Math.max(maxArea, currentArea);

    // Move the pointer of the shorter line inwards.
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

// Example Usage:
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(`Input: height = [${height}]`);
const result = maxArea(height);
console.log(`Output: ${result}`); // Output: 49

const height2 = [1, 1];
console.log(`Input: height = [${height2}]`);
const result2 = maxArea(height2);
console.log(`Output: ${result2}`); // Output: 1
