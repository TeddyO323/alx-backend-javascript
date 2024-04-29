/**
 * Returns the sum of all student ids.
 * @param {Array} students - Array of student objects.
 * @returns {number} Sum of all student ids.
 */
function getStudentIdsSum(students) {
  // Use reduce to calculate the sum of student ids
  return students.reduce((sum, student) => sum + student.id, 0);
}

// Exporting the function for use in other files
export default getStudentIdsSum;
