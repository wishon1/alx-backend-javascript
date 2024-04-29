/**
 * Returns the sum of all the students' ids.
 * @param {Object[]} students - The list of all students.
 * @returns {number} - The total sum of student ids.
 */
export default function getStudentIdsSum(students) {
  // Check if students is an array
  if (Array.isArray(students)) {
    return students.reduce((sum, student) => sum.id || sum + student.id, 0);
  }

  return 0;
}
