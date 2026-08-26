/**
 * app.js
 * Demonstrates Component 2: Custom Module Creation & Reusability.
 * Imports and reuses the isEven and logger custom modules using require().
 * Usage: node app.js
 */

const isEven = require("./modules/isEven");
const { logInfo, logSuccess, logError } = require("./modules/logger");

logInfo("Starting module reusability demo...");

const numbersToCheck = [2, 7, 10, 15, 42, 101];

numbersToCheck.forEach((num) => {
  try {
    const result = isEven(num);
    logSuccess(`${num} is ${result ? "Even" : "Odd"}`);
  } catch (err) {
    logError(err.message);
  }
});

// Demonstrate graceful handling of invalid input
try {
  isEven("not-a-number");
} catch (err) {
  logError(`Caught expected error -> ${err.message}`);
}

logInfo("Module reusability demo complete.");
