/**
 * Returns an array of student ids from a list of objects.
 * @param {Array} students - Array of student objects.
 * @returns {Array} Array of student ids.
 */
function getListStudentIds(students) {
  // Check if the input is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use map to extract ids from the array of objects
  return students.map((student) => student.id);
}

// Exporting the function for use in other files
export default getListStudentIds;
