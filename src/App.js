import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import AdminNavbar from './componentes/AdminNavbar';  // Importa el navbar de admin
import Home from './screens/Home.jsx';
import ShopCatalogo from './screens/ShopCatalogo.jsx';
import Products from './componentes/Productos';  // Importa el componente de Productos
import AddProduct from './componentes/AddProduct.jsx'; // Importa AddProduct
import Login from './componentes/Login.jsx';
import Servicios from './screens/Servicios.jsx';
import ComoTrabajamos from './componentes/ComoTrabajamos.jsx';
import ProtectedRoute from './componentes/ProtectedRoute'; // Asegúrate de importar ProtectedRoute

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogop" element={<ShopCatalogo />} />
          <Route path="/search" element={<ShopCatalogo />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/comoTrabajamos" element={<ComoTrabajamos />} />

          {/* Rutas exclusivas para admin */}
          <Route path="/Login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute><AdminNavbar /></ProtectedRoute>} />
          <Route path="/admin/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route path="/admin/add-product" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
