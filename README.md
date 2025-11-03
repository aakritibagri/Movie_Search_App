<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="React-based Movie Search App using OMDb API with favorites, modals, and YouTube trailers." />
</head>
<body>

  <h1>🎬 Movie Search App</h1>

  <p>A <strong>React-based web application</strong> that allows users to search movies using the OMDb API, manage favorites, and watch embedded YouTube trailers.</p>

  <img src="https://github.com/aakritibagri/Movie_Search_App/blob/main/Screenshot%202025-11-03%20122228.png?raw=true" width="80%" height="80%" alt="Movie Search App Screenshot 1">
  <img src="https://github.com/aakritibagri/Movie_Search_App/blob/main/Screenshot%202025-11-03%20122249.png?raw=true" width="80%" height="80%" alt="Movie Search App Screenshot 2">

  <h2>✨ Features</h2>
  <ul>
    <li>Search movies by title using OMDb API.</li>
    <li>Add and remove movies from favorites stored in <code>localStorage</code>.</li>
    <li>Toggle between viewing search results and favorite movies.</li>
    <li>View detailed movie information in a modal popup.</li>
    <li>Embedded YouTube trailers in the movie details modal.</li>
    <li>Favorites are persistent across sessions via <code>localStorage</code>.</li>
    <li>Responsive and clean UI with dark theme styling.</li>
    <li>Toggle button located on the left side for favorites view.</li>
    <li>Trailer iframe uses YouTube parameters with <code>allowFullScreen</code> to reduce flicker.</li>
  </ul>

  <h2>⚙️ Installation</h2>
  <ol>
    <li>Clone the repository.</li>
    <li>Run <code>npm install</code> to install dependencies.</li>
    <li>Add your OMDb API key in <code>App.js</code>.</li>
    <li>(Optional) Add your YouTube Data API key to fetch trailers dynamically.</li>
    <li>Run <code>npm start</code> to launch the app.</li>
  </ol>

  <h2>🚀 Usage</h2>
  <ul>
    <li>Use the search bar to find movies by title.</li>
    <li>Click the star button on a movie card to add/remove favorites.</li>
    <li>Use the left-sided toggle button to switch between favorites and search results.</li>
    <li>Click on a movie card to open a modal with detailed info and trailer.</li>
  </ul>

  <h2>🧩 Key Code Aspects</h2>

  <h3>Favorites State and Functions (in <code>App.js</code>)</h3>
  <pre><code>const [favorites, setFavorites] = useState(() =&gt; {
  const saved = localStorage.getItem('favorites');
  return saved ? JSON.parse(saved) : [];
});

useEffect(() =&gt; {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}, [favorites]);

const addFavorite = (movie) =&gt; {
  if (!favorites.some(fav =&gt; fav.imdbID === movie.imdbID)) {
    setFavorites([...favorites, movie]);
  }
};

const removeFavorite = (movie) =&gt; {
  setFavorites(favorites.filter(fav =&gt; fav.imdbID !== movie.imdbID));
};
</code></pre>

  <h3>Toggle Button Placement</h3>
  <p>The toggle button to switch between favorites and search results is placed inside a container aligned to the left:</p>
  <pre><code>&lt;div className="toggle-button-container"&gt;
  &lt;button onClick={() =&gt; setShowFavorites(!showFavorites)} style={{ margin: '1rem 0' }}&gt;
    {showFavorites ? "Show Search Results" : "Show Favorites"}
  &lt;/button&gt;
&lt;/div&gt;
</code></pre>

  <h3>YouTube Trailer Embed (in <code>MovieDetails.js</code>)</h3>
  <pre><code>{'{'}details.trailerId &amp;&amp; (
  &lt;div style={{ marginTop: '20px' }}&gt;
    &lt;h3&gt;Trailer&lt;/h3&gt;
    &lt;iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${'{'}details.trailerId{'}'}?rel=0&amp;modestbranding=1&amp;autoplay=0&amp;showinfo=0&amp;enablejsapi=1`}
      title="Movie Trailer"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    /&gt;
  &lt;/div&gt;
)}
</code></pre>

  <h2>💡 Additional Recommendations</h2>
  <ul>
    <li>Implement pagination or infinite scroll for large result sets.</li>
    <li>Add sorting and filtering options by year, rating, or genre.</li>
    <li>Support dark/light theme toggles for user preferences.</li>
    <li>Enable user reviews or comments on movies.</li>
    <li>Allow sharing movie details via social media.</li>
  </ul>
<hr>
  <footer>
    © 2025 Movie Search App by Aakriti Bagri | Built with ❤️ using React &amp; OMDb API
  </footer>

</body>
</html>
