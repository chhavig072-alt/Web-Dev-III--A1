/**
 * server.js
 * Component 3: Basic HTTP Server using the core `http` module.
 * Usage: node server.js
 * Then visit: http://localhost:3000/, /about, /contact, or any other path (404)
 */

const http = require("http");
const { logInfo } = require("./modules/logger");

const PORT = 3000;

const server = http.createServer((req, res) => {
  logInfo(`Incoming request: ${req.method} ${req.url}`);

  res.setHeader("Content-Type", "text/plain");

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.end("Welcome to Node Server");
      break;

    case "/about":
      res.statusCode = 200;
      res.end("About Page");
      break;

    case "/contact":
      res.statusCode = 200;
      res.end("Contact Page");
      break;

    default:
      res.statusCode = 404;
      res.end("404 Error: Route Not Found");
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
  console.log("Available routes: /, /about, /contact");
});
