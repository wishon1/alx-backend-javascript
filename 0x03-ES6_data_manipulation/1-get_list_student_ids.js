/**
 * Returns an array of student IDs from a list of student objects.
 * @param {Object[]} arr - An array of student objects.
 * @returns {Number[]} - An array of student IDs.
 */

export default function getListStudentIds(arr) {
  // Check if arr is an array
  if (!Array.isArray(arr)) {
    return [];
  }

  // Use map function to extract the id property from each object in the array
  return arr.map((obj) => obj.id);
}
