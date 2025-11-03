import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const MovieDetails = ({ isOpen, onRequestClose, details }) => {
  if (!details) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Movie Details"
      className="modal"
      overlayClassName="overlay"
    >
      <button onClick={onRequestClose} style={{float: "right"}} aria-label="Close movie details">Close</button>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <img
          src={details.Poster !== "N/A" ? details.Poster : 'https://via.placeholder.com/200'}
          alt={details.Title}
          style={{ width: '200px', borderRadius: '8px' }}
        />
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h2>{details.Title} ({details.Year})</h2>
          <p><strong>Director:</strong> {details.Director}</p>
          <p><strong>Actors:</strong> {details.Actors}</p>
          <p><strong>Plot:</strong> {details.Plot}</p>
          <p><strong>Genre:</strong> {details.Genre}</p>
          <p><strong>IMDB Rating:</strong> {details.imdbRating}</p>
          {details.trailerId && (
            <div style={{ marginTop: '20px' }}>
              <h3>Trailer</h3>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${details.trailerId}`}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default MovieDetails;
