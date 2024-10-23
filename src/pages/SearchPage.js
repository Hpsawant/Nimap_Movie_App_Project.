import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../api/api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import '../styles/SearchPage.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const query = useQuery().get('query');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (query) {
      searchMovies(query, currentPage).then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      });
    }
  }, [query, currentPage]);

  return (
    <div className="searchpage-container">
      <h1>Search Results for "{query}"</h1>
      {movies.length === 0 ? (
        <p className="no-results">No results found</p>
      ) : (
        <>
          <div className="movies-grid">
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default SearchPage;
