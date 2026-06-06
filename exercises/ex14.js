// Exercise 14: Cohort counts
//
// Group students by cohort.
// For each cohort, return:
// - cohort
// - studentCount
// - activeStudentCount
//
// Sort cohorts alphabetically.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const students = require('../data/students.json');

const lodashSolution = _.chain(students)

.groupBy("cohort")
.map((student, cohort)=>({
  cohort: cohort,
  studentCount: student.length,
  activeStudentCount: _.filter(student, num=> num.status.toLowerCase() === "active").length
}))
.sortBy("cohort")
.value();

console.log(lodashSolution);

/*
Expected output:
[
  { cohort: 'Data-0526', studentCount: 9, activeStudentCount: 7 },
  { cohort: 'UX-0526', studentCount: 8, activeStudentCount: 8 },
  { cohort: 'Web-0526', studentCount: 19, activeStudentCount: 16 }
]
*/
