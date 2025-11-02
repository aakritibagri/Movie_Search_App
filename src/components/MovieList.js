import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieClick }) => {
  if (!movies || movies.length === 0) return <p>No movies found</p>;

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} onClick={onMovieClick} />
      ))}
    </div>
  );
};

export default MovieList;
