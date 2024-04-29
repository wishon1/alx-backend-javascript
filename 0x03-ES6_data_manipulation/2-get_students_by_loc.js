/**
 * Retrieves students in a given location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - The location.
 * @returns {Object[]} - An array of objects representing students in the specified city.
 */

export default function getStudentsByLocation(students, city) {
  // Check if students is an array
  if (Array.isArray(students)) {
    // Use filter function to get students in the specified city
    const filteredStudents = students.filter((student) => student.location === city);
    return filteredStudents;
  }
  // Return an empty array if students is not an array
  return [];
}
