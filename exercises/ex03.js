// Exercise 3: Countries grouped by region
//
// Group countries by region.
// For each region, return an object with:
// - countryCount
// - totalPopulation
// - averageGdpPerCapita rounded to the nearest whole number
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const countries = require('../data/countries.json');

const lodashSolution = _.chain(countries)
.groupBy("region")
.mapValues(el=>({
    
    countryCount: el.length,
    totalPopulation:_.sumBy( el, "population"),
    averageGdpPerCapita: _.round(_.meanBy(el,"gdpPerCapita"))
}))
.value();

console.log(lodashSolution);

/*
Expected output:
{
  Africa: {
    countryCount: 21,
    totalPopulation: 1173458608,
    averageGdpPerCapita: 1977
  },
  Americas: {
    countryCount: 4,
    totalPopulation: 723655867,
    averageGdpPerCapita: 38084
  },
  Asia: {
    countryCount: 4,
    totalPopulation: 3255127650,
    averageGdpPerCapita: 13401
  },
  Europe: {
    countryCount: 4,
    totalPopulation: 274658781,
    averageGdpPerCapita: 42682
  },
  Oceania: {
    countryCount: 2,
    totalPopulation: 31667211,
    averageGdpPerCapita: 56565
  }
}
*/
