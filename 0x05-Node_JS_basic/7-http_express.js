const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
let DATABASE_FILE = '';

if (process.argv.length > 2) {
  [, , DATABASE_FILE] = process.argv;
}

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (dataPath) {
    fs.readFile(dataPath, (err, fileData) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else if (fileData) {
        const reportLines = [];
        const lines = fileData.toString('utf-8').trim().split('\n');
        const studentsByField = {};
        const headerFields = lines[0].split(',');
        const studentProperties = headerFields.slice(0, headerFields.length - 1);

        for (const line of lines.slice(1)) {
          const studentData = line.split(',');
          const studentValues = studentData.slice(0, studentData.length - 1);
          const field = studentData[studentData.length - 1];
          if (!Object.keys(studentsByField).includes(field)) {
            studentsByField[field] = [];
          }
          const studentEntries = studentProperties.map((property, index) => [
            property,
            studentValues[index],
          ]);
          studentsByField[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentsByField).reduce(
          (previous, current) => (previous || []).length + current.length,
        );
        reportLines.push(`Number of students: ${totalStudents}`);
        for (const [field, students] of Object.entries(studentsByField)) {
          reportLines.push([
            `Number of students in ${field}: ${students.length}.`,
            'List:',
            students.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportLines.join('\n'));
      }
    });
  } else {
    reject(new Error('Cannot load the database'));
  }
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseLines = ['This is the list of our students'];

  countStudents(DATABASE_FILE)
    .then((report) => {
      responseLines.push(report);
      const responseText = responseLines.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      responseLines.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseLines.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
