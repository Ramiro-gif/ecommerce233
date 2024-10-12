import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const links = [
  {
    name: "Inicio",
    link: '/',
  },
  {
    name: 'Productos',
    link: '/',
  },
  {
    name: 'Servicios',
    link: '/',
  },
  {
    name: 'Como trabajamos',
    link: '/',
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-around h-20 w-full z-10 bg-gradient-to-t to-[#8f0909] from-[#dfe078] ">
      {/* Contenedor del logo */}
      <div className="flex items-center">
        <p
          className="text-4xl font-pacifico text-[#FFCC00]"
          style={{
            textShadow: `
              1px -2px 0 #283593,
              -2px 2px 0 #283593,
              3px 4px 0 #283593
            `,
            letterSpacing: "3px",
            margin: "0 5px",
          }}
        >
          La Calesita
        </p>
        <img
          alt="logo"
          className="max-w-[60px] max-h-[60px] mb-0"
          src={"/logolimp2.png"}
        />
      </div>

      {/* Links para pantallas grandes */}
      <div className="hidden md:flex">
        {links.map((l) => (
          <Link
            key={l.name}
            className="text-lg font-pacifico text-[#FFCC00]"
            to={l.link}
            style={{
              textShadow: `
                1px -2px 0 #283593,
                -2px 2px 0 #283593,
                1px 2px 0 #283593
              `,
              margin: "0 5px",
            }}
          >
            {l.name}
          </Link>
        ))}
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
        <div className="flex flex-col items-center justify-around h-screen w-screen fixed top-0 left-0 z-50 bg-gradient-to-t to-[#800040] from-[#eeb926]">
          {links.map((l) => (
            <Link
              key={l.name}
              className="flex pl-10 pr-10 text-2xl font-pacifico text-[#f1eeee]"
              to={l.link}
              onClick={() => setIsMenuOpen(false)}
            >
              {l.name}
            </Link>
          ))}
          <div className="flex pt-10">
            <AiOutlineClose
              cursor="pointer"
              size={30}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
