/**
 * @param {Set} set - The set to check against
 * @param {Array} array - The array of element to check
 * @returns{Boolean} - return true or false
 */

export default function hasValuesFromArray(set, array) {
  for (const elem of array) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
