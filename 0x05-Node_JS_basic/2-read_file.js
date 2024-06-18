/**
 *
 */
const fs = require('fs');

function countStudents(filePath) {
  const studentCountByField = {};
  let totalStudents = 0;
  const studentsByField = {};

  try {
    // Read the file content synchronously
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.toString().split('\n');

    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        totalStudents += 1; // Increment the total student count
        const studentData = lines[i].toString().split(',');

        // Get the students field
        const field = studentData[3];

        // Get the first name of the student
        const firstName = studentData[0];

        if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
          // Add the first name to the corresponding field
          studentsByField[field].push(firstName);
        } else {
          // Initialize the array if the field does not exist
          studentsByField[field] = [firstName];
        }

        if (Object.prototype.hasOwnProperty.call(studentCountByField, field)) {
          studentCountByField[field] += 1;
        } else {
          studentCountByField[field] = 1;
        }
      }
    }

    // Adjust for the header line
    const actualStudentCount = totalStudents - 1;
    console.log(`Number of students: ${actualStudentCount}`);

    for (const [field, count] of Object.entries(studentCountByField)) {
      if (field !== 'field') {
        // Log the field information
        console.log(`Number of students in ${field}: ${count}. List: ${studentsByField[field].join(', ')}`);
      }
    }
  } catch (error) {
    // Throw an error if the file cannot be read
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
