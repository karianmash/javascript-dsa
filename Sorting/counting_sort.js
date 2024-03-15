/**
 * Counting Sort assumes that the input consists of integers within a specific range. It counts the
 * occurrences of each unique element in the input array and uses arithmetic to determine the positions
 * of each element in the output sequence.
 *
 * Complexity: O(n + k), where n is the number of elements in the input array and k is the range of the
 * non-negative key values.
 * */

function countingSort(arr) {
  const max = Math.max(...arr);
  const count = Array(max + 1).fill(0);
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  for (let i = 0; i <= max; i++) {
    while (count[i] > 0) {
      output.push(i);
      count[i]--;
    }
  }

  return output;
}
