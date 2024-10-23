import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../api/api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import '../styles/UpcomingPage.css';

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getUpcomingMovies(currentPage).then((response) => {
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    });
  }, [currentPage]);

  return (
    <div className="upcoming-container">
      <h1>Upcoming Movies</h1>
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

export default UpcomingPage;
