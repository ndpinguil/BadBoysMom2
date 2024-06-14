// src/contexts/MovieContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Movie { // Asegúrate de exportar la interfaz Movie
    title: string;
    description: string;
    imageUrl: string;
    time: string;
    characters: string[];
    features: string;
}

interface MovieContextType {
    movies: Movie[];
    selectedMovie: Movie | null;
    selectMovie: (movie: Movie) => void;
    updateMovie: (updatedMovie: Movie) => void;
    deleteMovie: (title: string) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
    const [movies, setMovies] = useState<Movie[]>([
        {
        title: 'Bad Boy: Hasta la muerte',
        description: 'Descripción de la película Bad Boy.',
        imageUrl: 'url_de_la_imagen1.jpg',
        time: '2 horas 15 minutos',
        characters: ['Protagonista', 'Antagonista', 'Secundario'],
        features: 'Acción, Comedia',
    },
    // Agrega más películas según sea necesario
]);

const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

const selectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
};

const updateMovie = (updatedMovie: Movie) => {
    setMovies((prevMovies) =>
        prevMovies.map((movie) => (movie.title === updatedMovie.title ? updatedMovie : movie))
    );
    setSelectedMovie(updatedMovie);
};

const deleteMovie = (title: string) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.title !== title));
    setSelectedMovie(null);
};

return (
    <MovieContext.Provider value={{ movies, selectedMovie, selectMovie, updateMovie, deleteMovie }}>
    {children}
    </MovieContext.Provider>
);
};

export const useMovieContext = () => {
const context = useContext(MovieContext);
    if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
}
return context;
};
