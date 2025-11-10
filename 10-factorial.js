// Get the first argument and convert it to integer
const n = parseInt(process.argv[2]);

// Recursive factorial function
function factorial(num) {
  if (isNaN(num) || num <= 0) return 1; // Factorial of NaN or 0 is 1
  return num * factorial(num - 1);
}

// Compute factorial and print
console.log(factorial(n));
