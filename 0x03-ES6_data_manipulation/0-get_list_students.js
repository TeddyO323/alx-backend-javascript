/**
 * Returns an array of student objects with id, firstName, and location.
 * @returns {Array} Array of student objects.
 */
function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}

// Exporting the function for use in other files
export default getListStudents;
