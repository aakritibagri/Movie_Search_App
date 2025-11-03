import React from 'react';

const MovieCard = ({ movie, onClick, favorites = [], addFavorite, removeFavorite }) => {
  const isFav = favorites.some(fav => fav.imdbID === movie.imdbID);

  return (
    <div
      className="movie-card"
      onClick={() => onClick(movie.imdbID)}
      tabIndex={0}
      style={{ cursor: 'pointer', position: 'relative' }}
      aria-label={`Show details for ${movie.Title}`}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(movie.imdbID);
        }
      }}
    >
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
        alt={`Poster for ${movie.Title}`}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button
        onClick={e => {
          e.stopPropagation();
          isFav ? removeFavorite(movie) : addFavorite(movie);
        }}
        aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          fontSize: '1.8rem',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: isFav ? 'gold' : 'gray'
        }}
      >
        {isFav ? '★' : '☆'}
      </button>
    </div>
  );
};

export default MovieCard;
