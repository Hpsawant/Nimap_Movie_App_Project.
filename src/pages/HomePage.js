import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import '../styles/HomePage.css';  // Importing the CSS file for HomePage

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getPopularMovies(currentPage).then((response) => {
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    });
  }, [currentPage]);

  return (
    <div className="homepage-container">
      <h1>Popular Movies</h1>
      <div className="movies-grid">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;
