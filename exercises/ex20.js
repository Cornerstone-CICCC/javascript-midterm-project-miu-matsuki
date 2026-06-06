// Exercise 20: Movies by genre
//
// Group movies by genre.
// For each genre, return:
// - genre
// - movieCount
// - titles sorted alphabetically
//
// Sort by movieCount descending, then genre alphabetically.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const movies = require('../data/movies.json');

const lodashSolution = _.chain(movies)
.groupBy("genre")
.map((movie, genre)=>({
  genre: genre,
  movieCount: movie.length,
  titles :_.sortBy(_.map(movie, "title"))
}))
.orderBy(["movieCount", "genre"], ["desc", "asc"])
.value();

console.log(lodashSolution);

/*
Expected output:
[
  {
    genre: 'Comedy',
    movieCount: 5,
    titles: [
      'Bright Tuesday',
      'Castle Switch',
      'Hidden Recipe',
      'Laughing Map',
      'Weekend Volcano'
    ]
  },
  {
    genre: 'Drama',
    movieCount: 5,
    titles: [
      'Glass Meadow',
      'Golden Steps',
      'Harbor Lights',
      'North Harbor',
      'The Last Orchard'
    ]
  },
  {
    genre: 'Action',
    movieCount: 4,
    titles: [ 'Iron Valley', 'Metro Chase', 'Neon Badge', 'Red District' ]
  },
  {
    genre: 'Sci-Fi',
    movieCount: 4,
    titles: [ 'Deep Signal', 'Silent Circuit', 'Solar Drift', 'The Small Planet' ]
  },
  {
    genre: 'Adventure',
    movieCount: 3,
    titles: [ 'Dust and Thunder', 'Stone Horizon', 'Winter Compass' ]
  },
  {
    genre: 'Animation',
    movieCount: 3,
    titles: [ 'Orbit Kids', 'Pixel Parade', 'Rocket Garden' ]
  },
  {
    genre: 'Romance',
    movieCount: 3,
    titles: [ 'Cafe Midnight', 'Moonlit Train', 'Paper Lanterns' ]
  },
  {
    genre: 'Thriller',
    movieCount: 3,
    titles: [ 'Blue Witness', 'Quiet Evidence', 'River of Glass' ]
  }
]
*/
