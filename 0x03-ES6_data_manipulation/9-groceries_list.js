/**
 * Returns a map of groceries with specified items and quantities.
 * @returns {Map} Map of groceries with items and quantities.
 */
function groceriesList() {
  const groceriesMap = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return groceriesMap;
}

// Exporting the function for use in other files
export default groceriesList;
