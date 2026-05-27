import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

// Punto de entrada de la aplicación
// Se utiliza ReactDOM para renderizar el componente principal App en el elemento con id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);