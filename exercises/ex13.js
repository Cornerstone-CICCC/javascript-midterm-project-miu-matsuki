// Exercise 13: Skill leaderboard
//
// Count how many active students have each skill.
// Return all skills used by at least 5 active students.
// Each item should include: skill, studentCount.
// Sort by studentCount descending, then skill alphabetically.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const students = require('../data/students.json');

const lodashSolution = _.chain(students)
.groupBy("")
.valiue();

console.log(lodashSolution);

/*
Expected output:
[
  { skill: 'css', studentCount: 16 },
  { skill: 'html', studentCount: 16 },
  { skill: 'javascript', studentCount: 13 },
  { skill: 'git', studentCount: 12 },
  { skill: 'figma', studentCount: 8 },
  { skill: 'python', studentCount: 7 },
  { skill: 'sql', studentCount: 7 },
  { skill: 'research', studentCount: 6 }
]
*/
