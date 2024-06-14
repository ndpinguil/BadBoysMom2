// src/components/MovieDetail.tsx

import React, { useState } from 'react';
import { Movie } from '../contexts/MovieContext'; // Importa el tipo Movie

interface MovieDetailProps {
  movie: Movie; // Usa el tipo Movie aquí
  onSave: (updatedMovie: Movie) => void;
  onDelete: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onSave, onDelete }) => {
  const [time, setTime] = useState(movie.time);
  const [characters, setCharacters] = useState(movie.characters.join(', '));
  const [features, setFeatures] = useState(movie.features);

  const handleSaveClick = () => {
    const updatedMovie: Movie = { ...movie, time, characters: characters.split(', '), features };
    onSave(updatedMovie);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>

      <h3>Tiempo:</h3>
      <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />

      <h3>Personajes:</h3>
      <textarea value={characters} onChange={(e) => setCharacters(e.target.value)} rows={4} />

      <h3>Características:</h3>
      <textarea value={features} onChange={(e) => setFeatures(e.target.value)} rows={4} />

      <button onClick={handleSaveClick}>Guardar</button>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
};

export default MovieDetail;
