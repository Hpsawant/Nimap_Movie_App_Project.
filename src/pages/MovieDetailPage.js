import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCast } from '../api/api';
import '../styles/MovieDetailPage.css';  // Import CSS for the page

const MovieDetailPage = () => {
  const { id } = useParams();  // Extract movie ID from URL
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch movie details and cast
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await getMovieDetails(id);
        const castData = await getMovieCast(id);
        setMovie(movieData.data);
        setCast(castData.data.cast.slice(0, 10));  // Get the top 5 cast members
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movie details or cast:", error);
        setLoading(false);
      }
    };
    fetchMovieData();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="movie-detail-container">
      {movie && (
        <>
          {/* Movie Poster */}
          <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />

          {/* Movie Details */}
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <p><strong>Overview:</strong> {movie.overview}</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average}</p>
            <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
            <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
          </div>

          {/* Movie Cast */}
          <div className="movie-cast">
            <h2>Cast</h2>
            <div className="cast-list">
              {cast.map((actor) => (
                <div key={actor.cast_id} className="cast-member">
                  <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
                  <p>{actor.name} as {actor.character}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default MovieDetailPage;
