// 0-get_list_students.js

/**
 * Provides a list of students with their IDs, first names, and locations.
 *
 * @returns {Array<Object>} An array of student objects containing id,
 * firstName, and location.
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}