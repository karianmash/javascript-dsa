// Linear search checks every element in the list until the desired element is found.
// It's straightforward but less efficient for large datasets.

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100));
