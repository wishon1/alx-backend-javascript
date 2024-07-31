/**
 * Create a function named hasValuesFromArray that returns a
 * boolean if all the elements in the array exist within the set.
 * It accepts two arguments: a set (Set) and an array (Array).
 *  
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
