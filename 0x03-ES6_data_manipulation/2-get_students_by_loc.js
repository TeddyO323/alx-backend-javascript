/**
 * Returns an array of student objects located in a specific city.
 * @param {Array} students - Array of student objects.
 * @param {string} city - City to filter by.
 * @returns {Array} Array of student objects in the specified city.
 */
function getStudentsByLocation(students, city) {
  // Use filter to get students in the specified city
  return students.filter((student) => student.location === city);
}

// Exporting the function for use in other files
export default getStudentsByLocation;
