import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import AdminNavbar from './componentes/AdminNavbar';
import Home from './screens/Home.jsx';
import ShopCatalogo from './screens/ShopCatalogo.jsx';
import Products from './componentes/Productos';
import AddProduct from './componentes/AddProduct.jsx';
import Login from './componentes/Login.jsx';
import Servicios from './screens/Servicios.jsx';
import ComoTrabajamos from './componentes/ComoTrabajamos.jsx';
import ProtectedRoute from './componentes/ProtectedRoute';
import StoreProvider from "./store";
import Cart from './componentes/Cart.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Convertir a booleano
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <StoreProvider>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogop" element={<ShopCatalogo />} />
            <Route path="/search" element={<ShopCatalogo />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/comoTrabajamos" element={<ComoTrabajamos />} />
            <Route path="/Login" element={<Login onLogin={handleLogin} />} />
             <Route path="/cart" element={<Cart />} />

            {/* Rutas protegidas para admin */}
            <Route path="/admin" element={<ProtectedRoute isAuthenticated={isAuthenticated}><AdminNavbar onLogout={handleLogout} /></ProtectedRoute>} />
            <Route path="/admin/products" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Products /></ProtectedRoute>} />
            <Route path="/admin/add-product" element={<ProtectedRoute isAuthenticated={isAuthenticated}><AddProduct /></ProtectedRoute>} />
          </Routes>
        </Router>
      </div>
    </StoreProvider>
  );
}

export default App;
