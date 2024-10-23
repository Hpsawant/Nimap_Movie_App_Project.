import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY; // Fetch API key from .env
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = (page = 1) => 
  axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);

export const getTopRatedMovies = (page = 1) => 
  axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);

export const getUpcomingMovies = (page = 1) => 
  axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);

export const searchMovies = (query, page = 1) => 
  axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);

export const getMovieDetails = (movieId) => 
  axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);

export const getMovieCast = (movieId) => 
  axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);