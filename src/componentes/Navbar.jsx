import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import fondo from '../Images/fondo.png'; // Ruta de la imagen de fondo

const links = [
  { name: "Inicio", link: '/' },
  { name: 'Productos', link: '/catalogop' },
  { name: 'Servicios', link: '/servicios' },
  { name: 'Como trabajamos', link: '/comotrabajamos' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? 'h-16' : 'h-24'
      }`}
      
    >
      <div className="flex items-center justify-between bg-gradient-to-r from-red-800 to-yellow-500 rounded-full px-4 py-2 mx-auto max-w-6xl shadow-lg"
      
      >
        {/* Contenedor del logo */}
        <div className="flex items-center">
          <p
            className={`${isScrolled ? 'text-3xl' : 'text-4xl'} font-pacifico text-[#FFCC00]`}
            style={{
              textShadow: "1px -2px 0 #283593, -2px 2px 0 #283593, 1px 2px 0 #283593"
            }}
          >
            La Calesita
          </p>
          <img alt="logo" className="max-w-[60px] max-h-[60px] mb-0 ml-2" src={"/logolimp2.png"} />
        </div>

        {/* Links para pantallas grandes */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((l) => (
            <Link
              key={l.name}
              className="text-2xl font-pacifico text-white transition duration-300 hover:text-yellow-400"
              to={l.link}
            >
              {l.name}
            </Link>
          ))}
          <Link
            to="/Login"
            className="flex items-center text-2xl font-pacifico text-white transition duration-300 hover:text-yellow-400"
          >
            <AiOutlineUser className="mr-2" size={30} />
          </Link>
        </div>

        {/* Ícono del menú para pantallas pequeñas */}
        {!isMenuOpen && (
          <div className="md:hidden flex items-center">
            <AiOutlineMenu
              cursor="pointer"
              onClick={() => setIsMenuOpen(true)}
              size={30}
              color="white"
            />
          </div>
        )}

        {/* Menú desplegable para pantallas pequeñas */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 z-50 bg-gradient-to-t from-purple-600 to-blue-600 p-4 w-64 h-screen">
            <div className="flex justify-end">
              <AiOutlineClose
                cursor="pointer"
                size={30}
                onClick={() => setIsMenuOpen(false)}
                color="white"
              />
            </div>
            {links.map((l) => (
              <Link
                key={l.name}
                className="block text-xl font-pacifico text-white my-4"
                to={l.link}
                onClick={() => setIsMenuOpen(false)}
              >
                {l.name}
              </Link>
            ))}
            <Link
              to="/Login"
              className="flex items-center text-xl font-pacifico text-white my-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Usuario
              <AiOutlineUser className="ml-2" size={25} />
            </Link>
            <div className="flex space-x-4 mt-8">
              <FaFacebookF className="text-white" size={25} />
              <FaTwitter className="text-white" size={25} />
              <FaYoutube className="text-white" size={25} />
              <FaInstagram className="text-white" size={25} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
