import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser, } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const links = [
  {
    name: "Inicio",
    link: '/',
  },
  {
    name: 'Productos',
    link: '/catalogop',
  },
  {
    name: 'Servicios',
    link: '/servicios',
  },
  {
    name: 'Como trabajamos',
    link: '/comotrabajamos',
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-start h-20 w-full z-10 bg-gradient-to-t to-[#8f0909] from-[#8f0909]">
      
      

      {/* Contenedor del logo */}
      <div className="flex items-center mx-auto">
        <p className="text-4xl font-pacifico text-[#FFCC00]" style={{
              textShadow: `
                1px -2px 0 #283593,
                -2px 2px 0 #283593,
                1px 2px 0 #283593
              `,
            }}>
          La Calesita
        </p>
        <img alt="logo" className="max-w-[60px] max-h-[60px] mb-0" src={"/logolimp2.png"} />
      </div>

      {/* Links para pantallas grandes */}
      <div className="hidden md:flex items-center">
        {links.map((l) => (
          <Link
            key={l.name}
            className="text-2xl font-pacifico text-[#FFCC00] mx-8 transition transform duration-300 hover:scale-110"
            to={l.link}
            style={{
              textShadow: `
                1px -2px 0 #283593,
                -2px 2px 0 #283593,
                1px 2px 0 #283593
              `,
            }}
          >
            {l.name}
          </Link>
        ))}
        {/* Ícono de inicio de sesión para Admin */}
        <Link
          to="/Login"
          className="flex items-center text-2xl font-pacifico text-[#FFCC00] mx-8 transition transform duration-300 hover:scale-110"
          style={{
            textShadow: `
              1px -2px 0 #283593,
              -2px 2px 0 #283593,
              1px 2px 0 #283593
            `,
          }}
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
            size={40}
            color="#eeda26"
            className="p-2"
          />
        </div>
      )}

      {/* Menú desplegable para pantallas pequeñas */}
      {isMenuOpen && (
        <div className="flex flex-col items-start fixed top-0 right-0 z-50 bg-gradient-to-t to-[#800040] from-[#eeb926] p-4 w-64 h-auto transition-transform transform ease-in-out duration-300">
          <div className="w-full flex justify-end">
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
              className="flex pl-10 pr-10 text-2xl font-pacifico text-[#f1eeee] my-4 transition transform duration-300 hover:scale-110"
              to={l.link}
              onClick={() => setIsMenuOpen(false)}
            >
              {l.name}
            </Link>
          ))}

          {/* Link de Admin en menú móvil */}
          <Link
            to="/Login"
            className="flex items-center pl-10 pr-10 text-3xl font-pacifico text-[#f1eeee] my-4 transition transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            Usuario
            <AiOutlineUser className="mr-2" size={30} />
          </Link>

          {/* Redes sociales */}
          <div className="flex space-x-4 mt-8">
            <FaFacebookF className="text-white" size={25} />
            <FaTwitter className="text-white" size={25} />
            <FaYoutube className="text-white" size={25} />
            <FaInstagram className="text-white" size={25} />
          </div>

          {/* Breadcrumb */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
