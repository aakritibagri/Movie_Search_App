import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const API_KEY = 'fb9c749e'; // Use your actual OMDb API key

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // States for modal
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovies = async (title) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || "No movies found");
      }
    } catch {
      setMovies([]);
      setError("Failed to fetch movies.");
    }
    setLoading(false);
  };

  // Fetch single movie's details by imdbID
  const fetchMovieDetails = async (imdbID) => {
    setLoading(true);
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${API_KEY}`);
    const data = await response.json();
    setMovieDetails(data);
    setDetailsOpen(true);
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
         <img src="logo.png"alt="Movie Search App Logo"className="app-logo"/>
        <h1>Movie Search App</h1>
        <SearchBar onSearch={fetchMovies} />
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <MovieList movies={movies} onMovieClick={fetchMovieDetails} />
        <MovieDetails
          isOpen={detailsOpen}
          onRequestClose={() => setDetailsOpen(false)}
          details={movieDetails}
        />
      </header>
    </div>
  );
}

export default App;
