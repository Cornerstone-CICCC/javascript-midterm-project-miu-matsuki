// Exercise 12: Low attendance list
//
// Find active students with attendance below 80.
// Return: id, name, cohort, attendance.
// Sort by attendance ascending.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const students = require('../data/students.json');

const lodashSolution = _.chain(students)
.filter((num)=> num.attendance < 80 && num.status.toLowerCase() === "active")
.map((el)=>({
  id: el.id, 
  name: el.name, 
  cohort: el.cohort, 
  attendance: el.attendance
}))
.orderBy("attendance", "asc")
.value();

console.log(lodashSolution);

/*
Expected output:
[
  { id: 'S007', name: 'Sophia Brown', cohort: 'Web-0526', attendance: 76 },
  { id: 'S020', name: 'Alexander Young', cohort: 'Web-0526', attendance: 78 },
  { id: 'S033', name: 'Aria Phillips', cohort: 'UX-0526', attendance: 79 }
]
*/
