import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './screens/Home.jsx';
import ShopCatalogo from './screens/ShopCatalogo.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contenedor del navbar con fondo degradado */}
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogop" element={<ShopCatalogo />} />
            <Route path="/search" element={<ShopCatalogo />} />
            
            
          </Routes>
        </Router>
      </div>

      {/* Contenedor del carrusel SIN fondo degradado */}
      
    </div>
  );
}

export default App;
