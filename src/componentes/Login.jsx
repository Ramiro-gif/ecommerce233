import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Llamada a tu backend para iniciar sesión
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
  
      console.log(response.data);
      
      // Si la respuesta es exitosa, almacenar el token y redirigir al dashboard de admin
      if (response.status === 200) {
        const { token } = response.data; // Asegúrate de que el token se devuelve aquí
        localStorage.setItem('token', token); // Almacena el token
        navigate('/admin'); // Cambia esta ruta si es diferente
      }
    } catch (error) {
      console.error(error);
      
      // Manejar el mensaje de error basado en la respuesta del backend
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Error en el inicio de sesión');
      } else {
        setErrorMessage('Error en el inicio de sesión');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-1/3">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
