import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from "../views/components/Button"

// Punto de entrada de la aplicación React
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Button />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
