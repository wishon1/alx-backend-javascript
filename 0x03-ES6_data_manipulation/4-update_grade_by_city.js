/**
 * Return an array of students for a specific city with their new grade.
 * @param {Object[]} students - An array of student objects obtained from getListStudents.
 * @param {string} city - The city for which students' grades are to be updated.
 * @param {Object[]} newGrades - Array of grade objects.
 * @returns {Object[]} - An array of students for the specific city with their new grade.
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  const defaultGrade = { grade: 'N/A' };
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrades
        .filter((grade) => grade.studentId === student.id)
        .pop() || defaultGrade).grade,
    }));
}
