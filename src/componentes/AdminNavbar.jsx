import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminNavbar = ({ onLogout }) => { // Recibe la función onLogout como prop
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Llama a la función de cierre de sesión pasada como prop
    navigate('/login'); // Redirige al usuario a la página de inicio de sesión
  };

  return (
    <div className="flex flex-col min-h-screen bg-yellow-200 p-20">
      <nav className=" p-4 flex justify-between items-center">
        <button onClick={handleLogout} className="text-black font-semibold bg-blue-500 border border-white px-4 py-2 rounded hover:bg-blue-600 whitespace-nowrap">
          Cerrar Sesión
        </button>
      </nav>

      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold mb-4">¡Bienvenido!</h2>
        <Link to="/admin/add-product">
          <button className="bg-blue-500 text-white p-4 rounded">
            Agregar Nuevos Productos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
