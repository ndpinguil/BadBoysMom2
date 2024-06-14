// src/pages/Home.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovieContext, Movie } from '../contexts/MovieContext'; // Importa el tipo Movie
import MovieCard from '../components/MovieCard';

const Home: React.FC = () => {
const { movies, selectMovie } = useMovieContext();  
const navigate = useNavigate();

const handleInfoClick = (movie: Movie) => {
    selectMovie(movie);
    navigate('/movie-info');
};

return (
    <div>
        <h1>Lista de Películas</h1>
        {movies.map((movie, index) => (
        <MovieCard
            key={index}
            title={movie.title}
            description={movie.description}
            imageUrl={movie.imageUrl}
            onInfoClick={() => handleInfoClick(movie)}
        />
        ))}
        </div>
    );
};

export default Home;
