import React, { useState, useEffect } from 'react';
import img1 from "../Images/img1.png";
import img2 from "../Images/subir.jpeg";
import img3 from "../Images/transporte.jpeg";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

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
      <footer className="bg-[#a48b96] text-white py-10 px-6 ">
        <div className="flex text-3x1 flex-col md:flex-row justify-around items-start">
          {/* Apartado Bigu */}
          <div className="mb-6 md:mb-0">
            <img src="/logolimp2.png" alt="Bigu" className="mb-4 w-32"/>
          </div>

          {/* Apartado de enlaces */}
          <div>
            <h4 className="font-bold mb-4 font-pacifico"
            style={{
              textShadow: `1px -2px 0 #283593, -2px 2px 0 #283593, 1px 2px 0 #283593`,
              letterSpacing: "3px",
              margin: "0 5px",
            }}>La Calesita</h4>
            <br/>
            <ul>
              <li>Venta Mayorista</li> 
              <li>Puntos de Venta</li>
            </ul>
          </div>

          {/* Apartado de contacto */}
          <div>
            <h4 className="font-bold mb-4 font-pacifico"
            style={{
              textShadow: `1px -2px 0 #283593, -2px 2px 0 #283593, 1px 2px 0 #283593`,
              letterSpacing: "3px",
              margin: "0 5px",
            }}>Contáctanos</h4> <br/>
            <p>Dirección: Av. Apoquindo 6410, of. 605, Las Condes.</p>
            <p>Teléfono: (+56) 9 3460 8298</p>
            <p>Email: info@bigu.cl</p>
            <p>Horario: Lun-Sáb, 9AM-6PM</p>
          </div>
        </div>

        {/* Separador */}
        <hr className="my-8 border-gray-400"/>
        <p className='text-center justify-between font-pacifico'>Nuestras redes sociales</p>

        {/* Créditos y redes sociales */}
        <div className="flex flex-col md:flex-row justify-around items-center">
          
          <div className="flex items-center space-x-4 mt-8">
            <FaFacebookF className="text-white" size={25} />
            <FaTwitter className="text-white" size={25} />
            <FaYoutube className="text-white" size={25} />
            <FaInstagram className="text-white" size={25} />
           
          </div>
          
          
        </div>
      </footer>
    </div>
  );
};

export default Servicios;
