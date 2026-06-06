// Exercise 19: Recent high-rated movies
//
// Return movies released in 2020 or later with a rating of 8.0 or higher.
// Sort by rating descending, then releaseYear descending.
// Each item should include: title, genre, releaseYear, rating.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const movies = require('../data/movies.json');

const lodashSolution = _.chain(movies)
.filter((num)=> num.releaseYear >= 2020  && num.rating >= 8 )
.map((el)=>({
  title: el.title, 
  genre: el.genre, 
  releaseYear: el.releaseYear, 
  rating: el.rating
}))
.orderBy(["rating" , "releaseYear"], ["desc" ,"desc"])
.value();

console.log(lodashSolution);

/*
Expected output:
[
  { title: 'Solar Drift', genre: 'Sci-Fi', releaseYear: 2022, rating: 8.4 },
  { title: 'Silent Circuit', genre: 'Sci-Fi', releaseYear: 2024, rating: 8.3 },
  { title: 'Stone Horizon', genre: 'Adventure', releaseYear: 2021, rating: 8.2 },
  { title: 'Harbor Lights', genre: 'Drama', releaseYear: 2021, rating: 8.1 },
  { title: 'Iron Valley', genre: 'Action', releaseYear: 2023, rating: 8 },
  { title: 'Glass Meadow', genre: 'Drama', releaseYear: 2023, rating: 8 },
  { title: 'Moonlit Train', genre: 'Romance', releaseYear: 2022, rating: 8 }
]
*/
