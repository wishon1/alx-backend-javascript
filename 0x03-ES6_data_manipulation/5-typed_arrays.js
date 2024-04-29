/**
 * Create a new ArrayBuffer with an Int8 value at a specific position.
 * @param {number} length - The length of the new ArrayBuffer.
 * @param {number} position - The position at which to set the Int8 value.
 * @param {number} value - The Int8 value to set.
 * @returns {DataView} - A DataView representing the modified ArrayBuffer.
 * @throws {Error} - Throws an error if the position is outside the range.
 */
export default function createInt8TypedArray(length, position, value) {
  // Check if position is within range
  if (position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView from the ArrayBuffer
  const view = new DataView(buffer);

  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  // Return the modified DataView
  return view;
}
