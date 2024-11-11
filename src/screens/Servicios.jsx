import React, { useState, useEffect } from 'react';
import img1 from "../Images/img1.png";
import img2 from "../Images/subir.jpeg";
import img3 from "../Images/transporte.jpeg";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import rapi from '../Images/rapi.png';
import pago from '../Images/pago.png';
import mastercard from '../Images/mastercard.png';
import visa from '../Images/visa.png';
import whatsap from '../Images/whatsap.png';

const images = [ img2, img3];

const Servicios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to go to the next slide
  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 600);
  };

  // Function to go to the previous slide
  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsAnimating(false);
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 6000); // Auto-change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-auto">
      {/* Promotional Banner */}
      <div className=" bg-gradient-to-r from-yellow-500 to-yellow-300 text-black text-center p-4">
        <h2 className="text-xl font-bold">Nuestros Servicios</h2>
        <p>Transportamos nuestros snacks por todo el norte Argentino</p>
      </div>

      {/* Carousel */}
      <div id="carouselExampleControls" className="relative w-full h-auto overflow-hidden">
        <div className="relative flex transition-transform duration-[600ms] ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={image} className="block w-full h-full max-h-[500px] object-cover" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Previous Slide Button */}
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center bg-none p-0 text-white opacity-50 hover:opacity-90"
          type="button"
          onClick={goToPrevious}
        >
          <span className="inline-block h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </span>
        </button>

        {/* Next Slide Button */}
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center bg-none p-0 text-white opacity-50 hover:opacity-90"
          type="button"
          onClick={goToNext}
        >
          <span className="inline-block h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </button>
      </div>

      {/* Distribucion Section */}
      <div className=" bg-gradient-to-r from-yellow-500 to-yellow-300 text-center ">
        <h2 className="text-2xl font-bold">Distribución</h2>
        <p className="mt-4 px-4">
          Nuestros productos están disponibles en una amplia red de distribución por todo el norte argentino.
          Ofrecemos entrega rápida y eficiente para asegurarnos de que nuestros snacks lleguen siempre frescos.
        </p>
        <div className="w-full h-64 bg-gradient-to-r from-yellow-500 to-yellow-300 mt-4 flex flex-col items-center justify-center">
                    <img
                        className="w-30 h-60 border-4 border-transparent shadow-lg hover:shadow-xl"
                        src="/assets/mapacalesita.png"
                        alt="Mapa de distribución"
                    />
                    <p className="text-gray-500 mt-2"></p>
                    </div>

      </div>

      {/* Footer Section */}
      <div className="flex justify-around bg-gray-100 py-4 bg-gradient-to-r from-yellow-500 to-yellow-300">
        <div className="text-center">
          <span>💳</span>
          <p>FORMAS DE PAGO</p>
          <small>pagá con tarjeta y Mercadopago</small>
        </div>
        <div className="text-center">
          <span>🚚</span>
          <p>ENVÍOS GRATIS</p>
          <small>en compras mayores a $40.000</small>
        </div>
        <div className="text-center">
          <span>🏬</span>
          <p>RETIRO GRATIS</p>
          <small>retirá tu pedido x nuestro local de ventas</small>
        </div>
      </div>
      <footer className="bg-[#603319] text-white py-10 px-6"> {/* Color de fondo marrón oscuro */}
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
          
          <p> +54 9 387-5952017</p>
          <p>calesita@gmail.com</p>
          <p>La Calesita Golosinas, Pellegrini 903, A4400 Salta</p>
        </div>

        {/* Métodos de pago */}
        <div className="mt-8 md:mt-0">
          <div className="flex space-x-4">
            <img 
              src={mastercard} 
              alt="Mastercard" 
              className="w-12 h-7 rounded-lg" // Tamaño más pequeño y esquinas redondeadas
            />
            <img 
              src={visa} 
              alt="Visa" 
              className="w-12 h-7 rounded-lg" // Tamaño más pequeño y esquinas redondeadas
            />
            <img 
              src={pago} 
              alt="Pago Fácil" 
              className="w-12 h-7 rounded-lg" // Tamaño más pequeño y esquinas redondeadas
            />
            <img 
              src={rapi} 
              alt="RapiPago" 
              className="w-12 h-7 rounded-lg" // Tamaño más pequeño y esquinas redondeadas
            />
          </div>
        </div>
      </div>

      {/* Sección inferior: Derechos y WhatsApp */}
      <div className="fixed bottom-10 right-10 animate-bounce-custom">
  {/* Icono de WhatsApp */}
  <a href="https://wa.me/5493875952017" target="_blank" rel="noopener noreferrer">
    <img 
      src={whatsap} 
      alt="WhatsApp" 
      className="w-12 transition-transform duration-300 ease-in-out hover:scale-125 animate-bounce" 
    />
  </a>
</div>

    </footer>
    </div>
  );
};

export default Servicios;
