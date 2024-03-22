// Generate a function that will accept a string and return the string in reverse

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Test the function
// console.log(reverseString('Alvin')); // olleh


// Chat: Implement a memoized function to calculate Fibonacci numbers to improve performance

const memoizedFibonacci = (function() {
  let memo = {};

  function f(n) {
    let value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1)
        value = n;
      else
        value = f(n - 1) + f(n - 2);

      memo[n] = value;
    }

    return value;
  }

  return f;
})();

console.log(memoizedFibonacci(10));  // 55
console.log(memoizedFibonacci(20)); // 6765

