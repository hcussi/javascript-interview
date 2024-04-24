/*

Take a positive integer, like 9, and apply the following rule:

- if it’s odd multiply it by 3 and add 1
- if it’s even, divide it in half.

For example, applying this rule to 9 yields 28

Apply this rule repeatedly and you'll create a chain:

9 → 28 → 14 → 7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1.
This particular chain requires 19 steps before it hits 1.

The Collatz conjecture says that all such chains will in fact hit 1 eventually.

Calling 1 the end of a chain, for what integer less than a million is the Collatz chain the longest?

*/

const isOdd = (n) => n % 2 !== 0;

const collatz = (number, map = {}) => {
  if (map[number]) {
    return map[number];
  }
  if (number === 1) {
    return 0;
  }
  if (isOdd(number)) {
    return 1 + collatz((number * 3) + 1);
  } else {
    return 1 + collatz(number / 2);
  }
}

console.log(`Number of steps for 9: ${collatz(9)}`)

const mapCalculation = {
  1: collatz(1),
}

let longestSteps = mapCalculation[1]
let longestNumber = 1;

for (let i = 2, coll; i < 1000000; i++) {
  coll = collatz(i, mapCalculation);
  mapCalculation[i] = coll;
  if (longestSteps < coll) {
    longestSteps = coll;
    longestNumber = i;
  }
}

console.log(`Number with the longest step: ${longestNumber}`);
