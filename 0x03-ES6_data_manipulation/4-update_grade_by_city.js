/**
 * Returns an array of students for a specific city with their new grade.
 * @param {Array} students - Array of student objects.
 * @param {string} city - City to filter by.
 * @param {Array} newGrades - Array of grade objects { studentId: number, grade: number }.
 * @returns {Array} Array of student objects with updated grades.
 */
function updateStudentGradeByCity(students, city, newGrades) {
  // Use filter to get students in the specified city
  // Use map to update grades based on newGrades array
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';

      return { ...student, grade };
    });
}

// Exporting the function for use in other files
export default updateStudentGradeByCity;
