import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';
import MovieDetailPage from './pages/MovieDetailPage';  // Import the Movie Detail Page
import SearchPage from './pages/SearchPage';
import Navbar from './components/Navbar';

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/top-rated" element={<TopRatedPage />} />
      <Route path="/upcoming" element={<UpcomingPage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />  {/* Route for movie details */}
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
