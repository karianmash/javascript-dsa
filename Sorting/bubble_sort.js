// ES6 approach!
function bubbleSort(arr) {
  let noSwaps, i, j;
  let start = new Date().getTime();
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    // Break from the loop if no more iterations
    if (noSwaps) break;
    console.log("One iteration complete!");
  }
  let stop = new Date().getTime();
  let elapsed = stop - start;
  console.log("The elapsed time was: " + elapsed + " milliseconds.");

  return arr;
}

bubbleSort([37, 45, 29, 8, 12, 88, -3]);

// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
