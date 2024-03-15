/**
 * Insertion sort builds the final sorted list one item at a time by repeatedly removing elements from
 * the input data and inserting them into their correct position in the sorted part of the list.
 *
 * Time Complexity: O(n^2)
 *
 *  Insertion sort are typically used for small datasets or as components in more complex sorting algorithms.
 * */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log("Sorted Array: ", insertionSort([2, 1, 9, 76, 4]));
