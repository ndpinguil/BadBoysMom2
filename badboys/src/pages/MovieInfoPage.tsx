// src/pages/MovieInfoPage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovieContext, Movie } from '../contexts/MovieContext';
import MovieDetail from '../components/MovieDetail';

const MovieInfoPage: React.FC = () => {
  const { selectedMovie, updateMovie, deleteMovie } = useMovieContext();
  const navigate = useNavigate();

  if (!selectedMovie) {
    return <div>Seleccione una película para ver los detalles.</div>;
  }

  const handleSave = (updatedMovie: Movie) => {
    updateMovie(updatedMovie);
    navigate('/');
  };

  const handleDelete = () => {
    deleteMovie(selectedMovie.title);
    navigate('/');
  };

  return (
    <div>
      <h1>Información de la Película</h1>
      <MovieDetail movie={selectedMovie} onSave={handleSave} onDelete={handleDelete} />
    </div>
  );
};

export default MovieInfoPage;
