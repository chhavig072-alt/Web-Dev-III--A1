# Web-Dev-III--A1
# Smart Utility Toolkit

**Course:** Web Dev III (Node.js & Express Backend)
**Unit:** Unit-1
**Assignment:** Lab Assignment 1 — Smart Utility Toolkit (2.5 Marks)

A collection of small backend utilities built using **only Node.js core
modules** (`process`, `http`, `fs`, `crypto`) — no external packages, no
frameworks, no database.

## Project Structure

## 1. CLI Calculator (`calculator.js`)

```bash
node calculator.js add 10 5
# Result: 15
```

## 2. Custom Modules & Reusability

```bash
node app.js
```

## 3. HTTP Server (`server.js`)

```bash
node server.js
```

| Route         | Response                    |
|---------------|------------------------------|
| `/`           | Welcome to Node Server       |
| `/about`      | About Page                   |
| `/contact`    | Contact Page                 |
| anything else | 404 Error: Route Not Found   |

## 4. File Manager (`fileManager.js`)

```bash
node fileManager.js
```

## 5. Dice Generator (`dice.js`)

```bash
node dice.js 5
```

## 6. Execution Flow & Console Analysis

Synchronous flow in `calculator.js`/`dice.js`; asynchronous chained
callbacks in `fileManager.js`; event-driven request logging in
`server.js`.

## Restrictions Followed

- No external npm packages
- No Express.js or third-party frameworks
- No database integration
- Only Node.js built-in modules used
