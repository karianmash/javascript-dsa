/**
 * Selection sort divides the input list into two parts: the sublist of items already sorted and the
 * sublist of items remaining to be sorted. It repeatedly selects the smallest (or largest, depending
 * on the sorting order) element from the unsorted sublist and swaps it with the leftmost unsorted element.
 *
 * Time Complexity: O(n^2)
 *
 * Selection sort is typically used for small datasets or as components in more complex sorting algorithms.
 * */

function selectionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

console.log("Sorted Array: ", selectionSort([0, 2, 34, 22, 10, 19, 17]));