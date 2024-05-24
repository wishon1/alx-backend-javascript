/**
 * Returns a string indicating preference for using const whenever possible.
 *
 * @returns {string} A string indicating preference for using const.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * Returns a string indicating that something is okay.
 *
 * @returns {string} A string indicating that something is okay.
 */
export function getLast() {
  return ' is okay';
}

/**
 * Constructs a string combining a base message with the result of getLast().
 *
 * @returns {string} A string combining a base message with the result of getLast().
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
