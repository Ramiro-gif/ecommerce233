import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

import rapi from '../Images/rapi.png';
import pago from '../Images/pago.png';
import mastercard from '../Images/mastercard.png';
import visa from '../Images/visa.png';
import whatsap from '../Images/whatsap.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        navigate('/admin');
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Error en el inicio de sesión');
      } else {
        setErrorMessage('Error en el inicio de sesión');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Iniciar sesión</h2>

        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="ej: email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 placeholder-gray-400"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="ej: contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 placeholder-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition-colors"
          >
            INICIAR SESIÓN
          </button>
        </form>

      </div>
      
    </div>
    
  );
};

export default Login;
