// Linear search checks every element in the list until the desired element is found.
// It's straightforward but less efficient for large datasets.

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6];
const target = 5;
console.log("Linear Search Result:", linearSearch(arr, target));
