
/**
 * @problem Search in Rotated Sorted Array
 * There is an integer array `nums` sorted in ascending order (with distinct values).
 * Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k`.
 * Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or -1 if it is not in `nums`.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @example
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 *
 * @solution
 * This is a classic modification of the standard binary search algorithm.
 * The key is to determine which half of the array (relative to the `mid` pointer) is sorted.
 *
 * 1. Initialize `left` and `right` pointers at the start and end of the array.
 * 2. Perform binary search while `left <= right`.
 * 3. In each iteration, find the `mid` point. If `nums[mid]` is the target, return `mid`.
 * 4. **Identify the sorted half**: Check if the left part of the array is sorted (`nums[left] <= nums[mid]`).
 *    - If it is, check if the `target` lies within the range of this sorted left half (`target >= nums[left] && target < nums[mid]`).
 *      - If yes, search in the left half by setting `right = mid - 1`.
 *      - If no, the target must be in the unsorted right half, so set `left = mid + 1`.
 * 5. If the left part is not sorted, it means the right part must be sorted (`nums[mid] < nums[right]`).
 *    - Check if the `target` lies within the range of this sorted right half (`target > nums[mid] && target <= nums[right]`).
 *      - If yes, search in the right half by setting `left = mid + 1`.
 *      - If no, the target must be in the unsorted left half, so set `right = mid - 1`.
 * 6. If the loop finishes without finding the target, return -1.
 */
function search(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) return mid;
    
    // Check if the left half is sorted
    if (nums[left] <= nums[mid]) { 
      // Check if target is in the sorted left half
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else { // Otherwise, the right half must be sorted
      // Check if target is in the sorted right half
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

console.log(search([4,5,6,7,0,1,2], 0)); // 4
console.log(search([4,5,6,7,0,1,2], 3)); // -1
