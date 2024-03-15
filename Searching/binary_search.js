// Binary search works on sorted arrays by repeatedly dividing the search interval in half.
// It's more efficient than linear search but requires a sorted array.

// Using Recursion
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
}

// Example usage:
const sortedArr = [1, 3, 4, 5, 6, 9, 11, 13];
const targetNum = 5;
console.log("Binary Search Result:", binarySearch(sortedArr, targetNum));

// Another Example
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103);
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28));
