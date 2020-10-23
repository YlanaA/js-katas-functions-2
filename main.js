// Kata 01 Add

function add(a, b) {
  return a + b;
}

console.log(add(2, 4));

// Kata 02 Multiply

function multiply(a, b) {
  let count = 0;
  let result = 0;
  while (count < b) {
    result = add(result, a);
    // console.log(result);
    count++;
  }
  return result;
}

console.log(multiply(6, 4));

// Kata 03 Power/Exponentiation

function power(x, n) {
  let count = 0;
  let result = 1;
  while (count < n) {
    result = multiply(result, x);
    count++;
  }
  return result;
}

console.log(power(2, 8));

// Kata 04 Factorial

function factorial(n) {
  let count = 1;
  let result = 1;
  while (count <= n) {
    result = multiply(result, count);

    // console.log(count);
    // console.log(result);
    // console.log(n);
    count++;
  }
  return result;
}

console.log(factorial(4));
