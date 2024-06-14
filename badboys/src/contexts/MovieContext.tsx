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
        title: 'Bad Boy: Dos policias Rebeldes',
        description: 'Dos policías de Miami sólo tienen 72 horas para encontrar cien millones de dólares en heroína robados del almacén de pruebas de su propia comisaría.',
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ecured.cu%2FBad_boys_%2528pel%25C3%25ADcula_de_1995%2529&psig=AOvVaw297yAIycImwwvrwzR3AjsO&ust=1718454046609000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCSh6qK24YDFQAAAAAdAAAAABAE',
        time: '1 hora 59 minutos',
        characters: ['Will Smith, Martin Lawrence', 'Tchéky Karyo', 'Téa Leoni'],
        features: 'Acción, Comedia',
    },
    {
        title: 'Bad Boy 2: Vuelven mas Rebeldes ',
        description: 'Su búsqueda conduce a un peligroso capo, Johnny Tapia, cuyo plan para controlar el tráfico de drogas de la ciudad ha desencadenado una guerra clandestina. Mientras tanto, las cosas se ponen sexys entre Mike y Syd, la hermana de Marcus.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZmU4NzVkZjEtZmQxMi00ZDY5LWI3ZDYtMWRmZjE5YmYwZjQzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX140_CR0,0,140,207_.jpg',
        time: '2 horas 27 minutos',
        characters: ['Will Smith, Martin Lawrence', 'Jordi Molla', 'Gabrielle Union'],
        features: 'Acción, Comedia',
    },
    {
        title: 'Bad Boy : Por Siempre',
        description: 'Los policías de la vieja escuela Mike Lowery y Marcus Burnett vuelven a patrullar juntos para derrotar al líder vicioso de un cartel de drogas de Miami. El recién creado equipo de élite AMMO del departamento de policía de Miami junto con Mike y Marcus se enfrentan al despiadado Armando Armas.',
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lahiguera.net%2Fcinemania%2Fpelicula%2F7243%2Fcomentario.php&psig=AOvVaw297yAIycImwwvrwzR3AjsO&ust=1718454046609000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCSh6qK24YDFQAAAAAdAAAAABAZ',
        time: '2 horas 4 minutos',
        characters: ['Will Smith, Martin Lawrence', 'Jacob Scipio', 'Kate de Castillo'],
        features: 'Acción, Comedia',
    },
    {
        title: 'Bad Boy: Hasta la muerte',
        description: 'Los policías más famosos del mundo regresan con su icónica mezcla de acción al límite y comedia escandalosa, pero esta vez con un giro inesperado: ¡Los mejores de Miami se dan a la fuga! Cuarta entrega de la saga '    ,
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fas.com%2Fmeristation%2Fcine%2Fcritica-de-bad-boys-ride-or-die-el-regreso-de-nuestros-dos-policias-rebeldes-favoritos-r%2F&psig=AOvVaw297yAIycImwwvrwzR3AjsO&ust=1718454046609000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCSh6qK24YDFQAAAAAdAAAAABAp',
        time: '1 horas 55 minutos',
        characters: ['Will Smith, Martin Lawrence', 'Erik Dane', 'Jacob Scipio'],
        features: 'Acción, Comedia',
    },
    
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
