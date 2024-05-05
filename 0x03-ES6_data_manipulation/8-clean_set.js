/**
 * Returns a string of set values that start with a specific string.
 * @param {Set} set - The set of values.
 * @param {string} startString - The string to check if values start with.
 * @returns {string} - A string containing all values of the set that start with startString
 */

export default function cleanSet(set, startString) {
  let result = [];
  // Check if set is a Set instance and startString is a String instance
  if (!(set instanceof Set) || !(typeof startString === 'string') || (startString === undefined) || (startString.length === 0)) {
    return '';
  }
  // Iterate over each value in the set
  for (const value of set) {
    // Check if the value starts with the startString
    if (value.startsWith(startString)) {
      // slice startstring length from value
      const sliceValue = value.slice(startString.length);
      result += `${sliceValue}-`;
    }
  }
  // Remove the last '-' character from the result string
  return result.slice(0, -1);
}
