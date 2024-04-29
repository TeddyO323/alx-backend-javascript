/**
 * Returns a new ArrayBuffer with an Int8 value at a specific position.
 * @param {Number} length - Length of the ArrayBuffer.
 * @param {Number} position - Position to set the Int8 value.
 * @param {Number} value - Int8 value to set.
 * @returns {DataView} DataView of the created ArrayBuffer.
 */
function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to manipulate the ArrayBuffer
  const dataView = new DataView(buffer);

  // Check if the position is within the range of the ArrayBuffer
  if (position >= 0 && position < length) {
    // Set the Int8 value at the specified position
    dataView.setInt8(position, value);
  } else {
    // Throw an error if the position is outside the range
    throw new Error('Position outside range');
  }

  return dataView;
}

// Exporting the function for use in other files
export default createInt8TypedArray;
