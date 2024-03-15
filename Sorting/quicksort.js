/**
 * Quick Sort is another divide-and-conquer algorithm that selects a 'pivot' element from the array
 * and partitions the other elements into two sub-arrays according to whether they are less than or
 * greater than the pivot. It then recursively sorts the sub-arrays.
 *
 * Quick Sort is generally faster than Merge Sort and is widely used in practice due to its average-case
 * time complexity of O(n log n), although it can degrade to O(n^2) in the worst case.
 * */

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log("Sorted Array: ", quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1
