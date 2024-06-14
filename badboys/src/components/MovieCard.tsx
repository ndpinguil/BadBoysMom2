// src/components/MovieCard.tsx

import React from 'react';

interface MovieCardProps {
    title: string;
    description: string;
    imageUrl: string;
    onInfoClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, description, imageUrl, onInfoClick }) => {
return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src={imageUrl} alt={title} style={{ width: '100px', height: '150px', marginRight: '20px' }} />
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={onInfoClick}>Información</button>
        </div>
    </div>
    );
};

export default MovieCard;
