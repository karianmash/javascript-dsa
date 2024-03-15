/**
 * Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent
 * elements, and swaps them if they are in the wrong order. It continues until no swaps are needed,
 * indicating that the list is sorted.
 *
 * Despite its simplicity, Bubble Sort is inefficient on large lists and generally performs poorly compared
 * to more advanced algorithms.
 */

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log("Sorted Array: ", bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
