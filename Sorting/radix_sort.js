/**
 * Radix Sort is a non-comparative sorting algorithm that sorts elements by first grouping the individual
 * digits of the same place value and then sorting the elements according to their increasing/decreasing
 * order of digits.
 *
 * Complexity: O(d * (n + k)), where d is the number of digits in the maximum number and k is the radix
 * (number of distinct possible digits).
 * */

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  return nums.reduce(
    (maxDigits, num) => Math.max(maxDigits, digitCount(num)),
    0
  );
}

function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    nums = [].concat(...digitBuckets);
  }

  return nums;
}

console.log(
  "Sorted Array: ",
  radixSort([23, 345, 5467, 12, 2345, 9852, 3, 12365, 125, 103, 1005])
);
