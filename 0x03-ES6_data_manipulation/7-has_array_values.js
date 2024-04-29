/**
 * Returns a boolean indicating whether all elements in the array exist within the set.
 * @param {Set} set - Set of elements.
 * @param {Array} array - Array of elements to check.
 * @returns {boolean} True if all elements in the array exist within the set, false otherwise.
 */
function hasValuesFromArray(set, array) {
  // Use the every method to check if all elements in the array exist in the set
  return array.every((element) => set.has(element));
}

// Exporting the function for use in other files
export default hasValuesFromArray;
