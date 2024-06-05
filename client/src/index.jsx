import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// React.StrictMode causes the program to run twice
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

