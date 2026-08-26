/**
 * dice.js
 * Component 5: Random Dice Generator using the core `crypto` module.
 * Usage:
 *   node dice.js       -> rolls the dice once
 *   node dice.js 5      -> rolls the dice 5 times
 */

const crypto = require("crypto");
const { logInfo } = require("./modules/logger");

function rollDice() {
  // crypto.randomInt(min, max) returns an integer in [min, max)
  return crypto.randomInt(1, 7); // 1 to 6 inclusive
}

const numberOfRolls = Number(process.argv[2]) || 1;

logInfo(`Rolling dice ${numberOfRolls} time(s)...`);

const history = [];

for (let i = 1; i <= numberOfRolls; i++) {
  const value = rollDice();
  history.push(value);
  console.log(`Dice Rolled: ${value}`);
}

console.log(`Roll history: [${history.join(", ")}]`);
