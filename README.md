<!DOCTYPE html>
<html lang="en">
<body>
  <h1>🎬 Movie_Search_App</h1>
  <p>A <b>React</b> -based web application for searching movies using the <strong>OMDb API</strong>.</p>

  <div class="section">
    <h2>✨ Features</h2>
    <ul>
      <li><strong>Movie Search:</strong> Search for movies by title using the OMDb API.</li>
      <li><strong>Movie Details Modal:</strong> View detailed information about a movie along with an embedded trailer fetched dynamically from YouTube.</li>
      <li><strong>Responsive Design:</strong> Works well on desktop and mobile devices.</li>
    </ul>
  </div>

  <div class="section">
    <h2>⚙️ Getting Started</h2>
    <h3>Prerequisites</h3>
    <ul>
      <li>Node.js (v14 or later recommended)</li>
      <li>npm (comes bundled with Node.js)</li>
      <li>OMDb API key (get one from OMDb API)</li>
    </ul>

    <h3>Installation</h3>
    <p>Clone the repository:</p>
    <pre><code>git clone https://github.com/yourusername/movie-search-app.git
cd movie-search-app</code></pre>

    <p>Install dependencies:</p>
    <pre><code>npm install</code></pre>

    <p>Add your OMDb API key and YouTube API key:</p>
    <ul>
      <li>Replace <code>API_KEY</code> value in <code>src/App.js</code> with your OMDb API key.</li>
      <li>Replace <code>YOUR_YOUTUBE_API_KEY</code> in <code>fetchTrailerId</code> function inside <code>src/App.js</code>.</li>
    </ul>
  </div>

  <div class="section">
    <h2>🚀 Run the App</h2>
    <pre><code>npm start</code></pre>
    <p>Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to view it in the browser.</p>
  </div>
   <img src="https://github.com/aakritibagri/Movie_Search_App/blob/main/Screenshot%202025-11-03%20122228.png?raw=true">
   <img src="
  <div class="section">
    <h2>🧭 Usage</h2>
    <ul>
      <li>Use the search bar to find movies by title.</li>
      <li>Click on a movie card to view details and watch the trailer.</li>
      <li>Click the star icon on a movie card to add it to your favorites.</li>
    </ul>
  </div>

  <div class="section">
    <h2>🧩 Component Overview</h2>
    <ul>
      <li><code>App.js</code>: Main component managing state, API calls, and feature integration.</li>
      <li><code>SearchBar.js</code>: Input form for movie searches.</li>
      <li><code>MovieList.js</code>: Displays a list of <code>MovieCard</code>s.</li>
      <li><code>MovieCard.js</code>: Shows movie poster, title, year, and favorite toggle.</li>
      <li><code>MovieDetails.js</code>: Modal popup displaying movie detail info and embedded trailer.</li>
    </ul>
  </div>

  <div class="section">
    <h2>📝 Notes</h2>
    <ul>
      <li>Favorites are saved in browser <code>localStorage</code>.</li>
      <li>Styling uses basic CSS but can be extended with frameworks or custom themes.</li>
    </ul>
  </div>
</body>
</html>
