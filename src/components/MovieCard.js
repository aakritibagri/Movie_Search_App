import React from 'react';

const MovieCard = ({ movie, onClick }) => (
  <div
    className="movie-card"
    onClick={() => onClick(movie.imdbID)}
    style={{ cursor: 'pointer' }}
    tabIndex={0}
    aria-label={`Show details for ${movie.Title}`}
    onKeyDown={e => {
      if (e.key === "Enter" || e.key === " ") {
        onClick(movie.imdbID);
      }
    }}
  >
    <img
      src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/150'}
      alt={`Poster for ${movie.Title}`}
    />
    <h3>{movie.Title}</h3>
    <p>{movie.Year}</p>
  </div>
);

export default MovieCard;
