/**
 * logger.js
 * A custom reusable logging module.
 */

function logInfo(message) {
  console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
}

function logError(message) {
  console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
}

function logSuccess(message) {
  console.log(`[SUCCESS] ${new Date().toISOString()} - ${message}`);
}

module.exports = { logInfo, logError, logSuccess };
