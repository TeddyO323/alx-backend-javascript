/**
 * Returns an updated map for all items with an initial quantity of 1.
 * @param {Map} itemsMap - Map of items and quantities.
 * @returns {Map} Updated map with quantities updated to 100 for items with initial quantity of 1.
 * @throws {Error} If the argument is not a map.
 */
function updateUniqueItems(itemsMap) {
  // Check if the argument is a map
  if (!(itemsMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Use forEach to update quantities for items with initial quantity of 1
  itemsMap.forEach((quantity, item) => {
    if (quantity === 1) {
      itemsMap.set(item, 100);
    }
  });

  return itemsMap;
}

// Exporting the function for use in other files
export default updateUniqueItems;
