#!/usr/bin/env node
const https = require('https')
const fs = require('fs')
const express = require('express');
const path = require('path');
const mockResponses = require('mock-responses');
const argv = require('yargs').argv;

const dbPath = path.join(__dirname, 'mock-responses.sqlite3');
const middlewares = mockResponses(dbPath);

const app = express();
const port = argv.port || 9200;

middlewares.forEach(mw => app.use(mw));

https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
  }, app)
  .listen(port, _ => {
    console.log(`Mock-Server listening on port ${port}!`);
  });

