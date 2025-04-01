/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) { 
  const studentsInCity = students.filter(student => student.location === city);

  return studentsInCity.map(student => {
    const newGrade = newGrades.find(grade => grade.studentId === student.id);
    return {
      ...student,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}
