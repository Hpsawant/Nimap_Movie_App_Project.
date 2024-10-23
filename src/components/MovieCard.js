import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  
  return (
    <Link to={`/movie/${movie.id}`}>  {/* Link to MovieDetailPage with the movie ID */}
      <div className="movie-card">
        <img src={imageUrl} alt={movie.title} />
        <h3>{movie.title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
