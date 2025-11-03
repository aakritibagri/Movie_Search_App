import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const API_KEY = 'fb9c749e';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);

  // Favorites state
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Persist favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add movie to favorites (avoid duplicates)
  const addFavorite = (movie) => {
    if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  // Remove movie from favorites
  const removeFavorite = (movie) => {
    setFavorites(favorites.filter(fav => fav.imdbID !== movie.imdbID));
  };

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
  const fetchTrailerId = async (movieTitle) => {
  const apiKey = 'AIzaSyBn18xFG_VFE-ACP21qCPxKzlKwZCQXuls'; // replace with your API key
  const query = encodeURIComponent(`${movieTitle} trailer`);
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      return data.items[0].id.videoId; // Return the first video's ID
    }
    return null;
  } catch (error) {
    console.error('Error fetching trailer:', error);
    return null;
  }
};
  const fetchMovieDetails = async (imdbID) => {
    setLoading(true);
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${API_KEY}`);
    const data = await response.json();
    
  // Fetch YouTube trailer ID
  const trailerId = await fetchTrailerId(data.Title);
  data.trailerId = trailerId
    
    setMovieDetails(data);
    setDetailsOpen(true);
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" className="App-logo" alt="Movie Search App Logo" />
        <h1>Movie Search App</h1>
      </header>

      <SearchBar onSearch={fetchMovies} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="toggle-button-container">
  <button onClick={() => setShowFavorites(!showFavorites)} style={{ margin: '1rem 0' }}>
    {showFavorites ? "Show Favorites" : "Show Favorites"}
  </button>
</div>

      <MovieList
        movies={showFavorites ? movies : favorites}
        onMovieClick={fetchMovieDetails}
        favorites={favorites}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
      />

      <MovieDetails
        isOpen={detailsOpen}
        onRequestClose={() => setDetailsOpen(false)}
        details={movieDetails}
      />
    </div>
  );
}

export default App;
