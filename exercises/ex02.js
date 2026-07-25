// Exercise 2: Population density report
//
// Return all countries with population density above 300 people per square km.
// Sort from highest density to lowest density.
// Each item should include: name, region, density rounded to 1 decimal place.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const countries = require('../data/countries.json');

const lodashSolution = _.chain(countries)

.map(el=>({
  name: el.name,
  region: el.region,
  dencity: _.round(el.population / el.area,1) // Feedback: The expected property is density, not dencity.
}))
.filter((den)=> den.dencity > 300)
.orderBy("desc") // Feedback: Sort by the density field descending, for example orderBy('density', 'desc').
.value();

console.log(lodashSolution);

/*
Expected output:
[
  { name: 'Rwanda', region: 'Africa', density: 535.1 },
  { name: 'India', region: 'Asia', density: 434.6 },
  { name: 'Japan', region: 'Asia', density: 326.2 }
]
*/
