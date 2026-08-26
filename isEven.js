/**
 * modules/isEven.js
 * A custom reusable module that checks whether a number is even or odd.
 */

function isEven(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    throw new TypeError("isEven() expects a valid number as input.");
  }
  return num % 2 === 0;
}

// Export the function so it can be imported using require() elsewhere
module.exports = isEven;
