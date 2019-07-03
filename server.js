const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const DIST_DIR = path.join(__dirname, '../build');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(path.join(__dirname, DIST_DIR)));

app.get('/', function(request, response) {
  response.sendFile(__dirname + HTML_FILE);
});

app.listen(PORT, error =>
  error
    ? console.error(error)
    : console.info(
        `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
      )
);
