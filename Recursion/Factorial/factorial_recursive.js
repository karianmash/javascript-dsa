function factorial(num) {
  if (num <= 0) return `${num} isn't a positive number!`;
  else if (num === 1) return 1;

  return num * factorial(num - 1);
}
1111
console.log(factorial(-2));
console.log(factorial(1));
console.log(factorial(3));
