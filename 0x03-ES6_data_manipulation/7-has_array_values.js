/**
 * @param {Set} set - The set to check against
 * @param {Array} array - The array of element to check
 * @returns
 */

export default function hasValuesFromArray(set, array) {
  for (const elem of array) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
