// 1. Importaciones esenciales
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa estilos globales
import App from './App.js'; // Importa el componente principal

// 2. Crea la raíz del DOM donde se montará la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// 3. Renderiza el componente raíz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);