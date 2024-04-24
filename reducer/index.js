import reduce from "./reducer.js";

/**
 * Pass and array, a function to use when reducing and the initial value
 */

const nums = [1, 2, 3, 4];
const sum = (accum, curr) => accum + curr;
const init = 0

console.log(`nums: ${nums}`);
console.log("result: " + reduce(nums, sum, init));
