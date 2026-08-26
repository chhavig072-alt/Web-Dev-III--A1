/**
 * fileManager.js
 * Component 4: File Manager using the core `fs` module.
 * Demonstrates Create, Read, Update, and Delete operations on a text file.
 * Usage: node fileManager.js
 */

const fs = require("fs");
const path = require("path");
const { logInfo, logSuccess, logError } = require("./modules/logger");

const filePath = path.join(__dirname, "test.txt");

// ---------- CREATE ----------
function createFile() {
  logInfo("Creating File...");
  fs.writeFile(filePath, "Hello Node.js", (err) => {
    if (err) {
      logError(`Failed to create file: ${err.message}`);
      return;
    }
    logSuccess("File Created");
    readFile();
  });
}

// ---------- READ ----------
function readFile() {
  logInfo("Reading File");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      logError(`Failed to read file: ${err.message}`);
      return;
    }
    console.log(data);
    updateFile();
  });
}

// ---------- UPDATE (append) ----------
function updateFile() {
  fs.appendFile(filePath, "\nLearning FS Module", (err) => {
    if (err) {
      logError(`Failed to update file: ${err.message}`);
      return;
    }
    logSuccess("File Updated");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        logError(`Failed to read updated file: ${err.message}`);
        return;
      }
      console.log(data);
      deleteFile();
    });
  });
}

// ---------- DELETE ----------
function deleteFile() {
  fs.unlink(filePath, (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        logError("File does not exist, nothing to delete.");
      } else {
        logError(`Failed to delete file: ${err.message}`);
      }
      return;
    }
    logSuccess("File Deleted");
  });
}

// Kick off the full CRUD demo
createFile();
