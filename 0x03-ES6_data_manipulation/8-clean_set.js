/**
 * Create a function named cleanSet that returns a string of all the set
 * values that start with a specific string (startString).
 * It accepts two arguments: a set (Set) and a startString (String).
 * When a value starts with startString you only append the rest of the string.
 * The string contains all the values of the set separated by -.
 * 
 * 
 * Returns a string of set values that start with a specific string.
 * @param {Set} set - The set of values.
 * @param {string} startString - The string to check if values start with.
 * @returns {string} - A string containing all values of the set that start with startString
 */

export default function cleanSet(set, startString) {
  // Check if startString is undefined or empty
  if (startString === undefined || startString.length === 0) {
    return '';
  }

  // return Array.from(set)

  const arrayFromSet = [];
  set.forEach((elem) => arrayFromSet.push(elem));

  return arrayFromSet
    .filter((elem) => {
      if (elem !== undefined) {
        return elem.startsWith(startString);
      }
      return '';
    }) // Filter values that start with startString
    .map((elem) => {
      if (elem !== undefined) {
        return elem.slice(startString.length);
      }
      return '';
    }) // Map to remove startString from each value
    .join('-'); // Join the filtered and mapped values with '-'
}
