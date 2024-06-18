/**
 *  Create a small HTTP server using Node's HTTP module
*/
const http = require('http');

// create the http server and assign it to a variable 'app'
const app = http.createServer((req, res) => {
  // Set the response header content type to 'text/plain'
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body with the text "Hello Holberton School!"
  res.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
