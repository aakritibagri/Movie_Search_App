import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Accessibility: bind modal to app root

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
      <button onClick={onRequestClose} style={{float: "right"}}>Close</button>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <img
          src={details.Poster !== "N/A" ? details.Poster : 'https://via.placeholder.com/200'}
          alt={details.Title}
          style={{ width: '200px', borderRadius: '8px' }}
        />
        <div>
          <h2>{details.Title} ({details.Year})</h2>
          <p><strong>Director:</strong> {details.Director}</p>
          <p><strong>Actors:</strong> {details.Actors}</p>
          <p><strong>Plot:</strong> {details.Plot}</p>
          <p><strong>Genre:</strong> {details.Genre}</p>
          <p><strong>imdb Rating:</strong> {details.imdbRating}</p>
          {/* Add more fields as needed */}
        </div>
      </div>
    </Modal>
  );
};

export default MovieDetails;
