/**
 * Returns a Set from an array.
 * @param {Array} array - Array of elements.
 * @returns {Set} Set containing elements from the array.
 */
function setFromArray(array) {
  // Use the Set constructor to create a Set from the array
  return new Set(array);
}

// Exporting the function for use in other files
export default setFromArray;
