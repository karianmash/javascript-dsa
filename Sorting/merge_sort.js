/**
 * Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively
 * sorts each half, and then merges the sorted halves to produce a single sorted array.
 *
 * It is known for its stable performance and guarantees O(n log n) time complexity, making it efficient
 * for large data sets.
 */

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log("Sorted Array: ", mergeSort([10, 24, 76, 73, 1, 9, 3, 5, 7, 2]));

// Merge function
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// function merge(arr1, arr2) {
//   let results = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     results.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
//   }

//   return results.concat(arr1.slice(i)).concat(arr2.slice(j));
// }
