// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';  // Asegúrate de que los estilos se importan si es necesario

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
