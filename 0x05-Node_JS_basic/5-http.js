/**
 * Create a more complex HTTP server using Node's HTTP module
 */
const http = require('http');
const fs = require('fs');

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (error, fileData) => {
    // If there's an error reading the file, reject the promise with an
    // error message
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }

    // If the file data is successfully read
    if (fileData) {
      const fileLines = fileData
        .toString('utf-8')
        .trim()
        .split('\n');

      // Initialize an empty object to group students by their fields
      const studentGroups = {};

      // Extract the field names from the first line of the file
      const headerFields = fileLines[0].split(',');

      // Extract the property names for each student from the header fields, excluding
      // the last field
      const studentPropertyNames = headerFields.slice(0, headerFields.length - 1);

      // Iterate over each line of student data, starting from the second line
      for (const line of fileLines.slice(1)) {
        // Split the line into individual student properties
        const studentProperties = line.split(',');

        // Extract the student property values, excluding the last field
        const studentPropertyValues = studentProperties.slice(0,
          studentProperties.length - 1);

        // Get the student's field (the last field in the record)
        const studentField = studentProperties[studentProperties.length - 1];

        // If the field does not already exist in the 'studentGroups' object,
        // initialize it as an empty array
        if (!Object.keys(studentGroups).includes(studentField)) {
          studentGroups[studentField] = [];
        }

        // Create an array of [property name, property value] pairs for the student
        const studentEntries = studentPropertyNames.map((propName,
          index) => [propName, studentPropertyValues[index]]);

        // Convert the array of entries into an object and add it to the appropriate field group
        studentGroups[studentField].push(Object.fromEntries(studentEntries));
      }

      // Calculate the total number of students by summing the lengths of all field groups
      const totalStudents = Object.values(studentGroups).reduce((previous, current) => (
        previous || []).length + current.length);

      // Create the result string with the total number of students
      let result = `Number of students: ${totalStudents}\n`;

      // For each field group, append the number of students and their names to the result string
      for (const [field, group] of Object.entries(studentGroups)) {
        // Create a string of student names separated by commas
        const studentNames = group.map((student) => student.firstname).join(', ');

        // Append the number of students in the field and their names to the result string
        result += `Number of students in ${field}: ${group.length}. List: ${studentNames}\n`;
      }

      // Resolve the promise with the result string
      resolve(result.trim());
    }
  });
});

// Create the HTTP server and assign it to the variable 'app'
const app = http.createServer((req, res) => {
  // Set the response header content type to 'text/plain'
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Get the path to the CSV file from the command line arguments
    const databasePath = process.argv[2];

    if (!databasePath) {
      res.end('Database path not provided');
    } else {
      // Call the 'countStudents' function and respond with the result
      countStudents(databasePath)
        .then((result) => {
          res.end(`This is the list of our students\n${result}`);
        })
        .catch((error) => {
          res.end(error.message);
        });
    }
  } else {
    // Respond with a 404 Not Found for any other paths
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
