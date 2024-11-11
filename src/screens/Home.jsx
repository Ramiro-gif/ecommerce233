import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CarouselPage from '../componentes/CarouselPage.jsx';
import Productos from '../componentes/Productos.jsx';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

import rapi from '../Images/rapi.png';
import pago from '../Images/pago.png';
import mastercard from '../Images/mastercard.png';
import visa from '../Images/visa.png';
import whatsap from '../Images/whatsap.png';
import fondo from '../Images/fondo.png'; // Ruta de la imagen de fondo


const Home = () => {
  const productosRef = useRef(null); // Para "Nuestros Productos"
  const imgRefs = useRef([]); // Para las imágenes de productos

  useEffect(() => {
    // Función para observar los elementos
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-left');
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observar las imágenes y el texto de productos
    if (productosRef.current) observer.observe(productosRef.current);
    imgRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      if (productosRef.current) observer.unobserve(productosRef.current);
      imgRefs.current.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Puedes ajustar la altura si lo necesitas
      }}
    >
      <CarouselPage />

      {/* Nueva sección: Texto y Video al lado */}
    <section
  className="flex flex-col md:flex-row items-center justify-center w-full h-auto py-10 px-6 border-4 border-transparent shadow-lg hover:shadow-xl"
  style={{
    backgroundImage: `url(${fondo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Contenedor del video */}
  <div className="w-full md:w-1/2 flex justify-center p-5">
    <video className="w-full md:w-auto max-w-md rounded-lg shadow-lg" src={"/assets/calesita2.mp4"} controls />
  </div>

  {/* Contenedor de texto */}
  <div className="w-full md:w-1/1 p-5 flex flex-col items-center md:items-start border-4 border-gray-200 rounded-lg shadow-lg">
    <h2
      className="text-4xl md:text-5xl font-pacifico text-orange-600 text-center md:text-left"
      style={{
        textShadow: "1px 1px 0 #ffcc80",
        marginBottom: "20px",
      }}
    >
      Somos <br /> La Calesita
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed text-center md:text-left">
      Una empresa que tiene un legado en la industria de la alimentación, dedicado a la producción de productos como el arroz inflado y la semillas de girasol, con más de 50 años de historia y expansión en múltiples provincias. Con el impulso de una nueva generación, estamos comprometidos con la calidad y el crecimiento constante para ofrecer lo mejor a nuestros clientes.
    </p>
    <button className="mt-4 px-6 py-3 border border-red-600 text-red-600 text-lg font-semibold rounded-md hover:bg-red-600 hover:text-white transition duration-300">
      <Link to="/comoTrabajamos" className="text-orange no-underline">
        CONÓCENOS→
      </Link>
    </button>
  </div>
</section>


      {/* Sección Productos */}
      <div className='bg-gradient-to-r '>
        <Productos />

        <div className='bg-gradient-to-r '>
          {/* Contenedor de imágenes con enlaces */}
          <div className="flex justify-center space-x-4 py-5 "
          style={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <Link to="/catalogop">
              <img
                ref={(el) => (imgRefs.current[1] = el)}
                src={"/assets/snacksaldo.png"}
                alt="Productos Salados"
                className="w-full h-48 object-cover rounded-md hover:opacity-80 transition-opacity duration-300 opacity-0 "
              />
            </Link>
          </div>
          <div
            className="text-4xl flex pt-0 pb-5 items-center justify-center font-extrabold text-[#f8f558] opacity-0"
            style={{
              backgroundImage: `url(${fondo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            ref={productosRef}
          >
            <button className="mt-4 px-6 py-3 border border-red-600 text-red-600 text-lg font-semibold rounded-md hover:bg-red-600 hover:text-white transition duration-300">
            <Link to="/catalogop" className="text-orange no-underline">
              Mas Productos→
            </Link>
          </button>
          </div>
        </div>
      </div>

      {/* Nueva sección: Footer */}
      <footer className="bg-[#603319] text-white py-10 px-6">
        <div className="flex flex-col md:flex-row justify-around items-start">
          {/* Sección de redes sociales */}
          <div>
            <h4 className="font-bold mb-4">Seguinos</h4>
            <div className="flex space-x-4">
              <FaInstagram className="text-white animate-bounce" size={30} />
              <FaFacebookF className="text-white animate-bounce" size={30} />
            </div>
          </div>

          {/* Sección de contacto */}
          <div>
            <h4 className="font-bold mb-4">Contáctanos</h4>
            <p>+54 9 387-5952017</p>
            <p>calesita@gmail.com</p>
            <p>La Calesita Golosinas, Pellegrini 903, A4400 Salta</p>
          </div>

          {/* Métodos de pago */}
          <div className="mt-8 md:mt-0">
            <div className="flex space-x-4">
              <img src={mastercard} alt="Mastercard" className="w-12 h-7 rounded-lg" />
              <img src={visa} alt="Visa" className="w-12 h-7 rounded-lg" />
              <img src={pago} alt="Pago Fácil" className="w-12 h-7 rounded-lg" />
              <img src={rapi} alt="RapiPago" className="w-12 h-7 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Sección inferior: Derechos y WhatsApp */}
        <div className="fixed bottom-10 right-10 animate-bounce-custom">
          {/* Icono de WhatsApp */}
          <a href="https://wa.me/5493875952017" target="_blank" rel="noopener noreferrer">
            <img src={whatsap} alt="WhatsApp" className="w-12 transition-transform duration-300 ease-in-out hover:scale-125 animate-bounce" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
