const express = require('express');

const app = express();

// route handler for the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
