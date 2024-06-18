const fs = require('fs');

/**
 * Counts the students in a CSV data file and logs details to the console.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (error, fileData) => {
    // If there's an error reading the file, reject the promise with an error message
    if (error) {
      reject(new Error('Cannot load the database'));
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

      // Extract the property names for each student from the header fields,
      // excluding the last field
      const studentPropertyNames = headerFields.slice(0, headerFields.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentProperties = line.split(',');

        // Extract the student property values, excluding the last field
        const studentPropertyValues = studentProperties.slice(0, studentProperties.length - 1);

        // Get the student's field (the last field in the record)
        const studentField = studentProperties[studentProperties.length - 1];

        // If the field does not already exist in the 'studentGroups' object,
        // initialize it as an empty array
        if (!Object.keys(studentGroups).includes(studentField)) {
          studentGroups[studentField] = [];
        }

        // Create an array of [property name, property value] pairs for the student
        const studentEntries = studentPropertyNames.map((propName, index) => [propName,
          studentPropertyValues[index]]);

        // Convert the array of entries into an object and add it to the appropriate field group
        studentGroups[studentField].push(Object.fromEntries(studentEntries));
      }

      // Calculate the total number of students by summing the lengths of all field groups
      const totalStudents = Object.values(studentGroups).reduce((previous, current) => (
        previous || []).length + current.length);

      // Log the total number of students to the console
      console.log(`Number of students: ${totalStudents}`);

      // For each field group, log the number of students and their names
      for (const [field, group] of Object.entries(studentGroups)) {
        // Create a string of student names separated by commas
        const studentNames = group.map((student) => student.firstname).join(', ');

        // Log the number of students in the field and their names
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }

      // Resolve the promise indicating successful completion
      resolve(true);
    }
  });
});

module.exports = countStudents;
