/* eslint-disable */
export default function getIdsSum(students) {
  return students.reduce((acc, student) => acc + student.id, 0);
}
