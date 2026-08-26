/**
 * calculator.js
 * A simple CLI-based calculator built using the core `process` module.
 * Usage: node calculator.js <add|sub|mul|div> <num1> <num2>
 * Example: node calculator.js add 10 5
 */

const args = process.argv.slice(2); // strip node path & filename

console.log("Raw arguments received:", args);

if (args.length !== 3) {
  console.log("Invalid usage!");
  console.log("Correct format: node calculator.js <add|sub|mul|div> <num1> <num2>");
  process.exit(1);
}

const [operation, rawNum1, rawNum2] = args;
const num1 = Number(rawNum1);
const num2 = Number(rawNum2);

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.log("Error: Please provide valid numbers for num1 and num2.");
  process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "mul":
    result = num1 * num2;
    break;
  case "div":
    if (num2 === 0) {
      console.log("Error: Division by zero is not allowed.");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log(`Error: Unknown operation "${operation}".`);
    console.log("Supported operations: add, sub, mul, div");
    process.exit(1);
}

console.log(`Result: ${result}`);
