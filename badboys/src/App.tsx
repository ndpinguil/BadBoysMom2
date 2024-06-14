// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import Home from './pages/Home';
import MovieInfoPage from './pages/MovieInfoPage';

const App: React.FC = () => {
  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-info" element={<MovieInfoPage />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
};

export default App;
