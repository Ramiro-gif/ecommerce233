import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import rapi from '../Images/rapi.png';
import pago from '../Images/pago.png';
import mastercard from '../Images/mastercard.png';
import visa from '../Images/visa.png';
import whatsap from '../Images/whatsap.png';

const ComoTrabajamos = () => {
  return (
    <div className="bg-white">
      {/* Sección de encabezado con fondo rosa */}
      <div className="bg-pink-500 text-white text-center py-8">
        <h1 className="text-4xl font-bold">QUIENES SOMOS</h1>
      </div>

      {/* Imagen principal grande */}
      <div className="w-full">
        <video
          src="/assets/calesita.mp4"
          controls
          className="w-full object-cover h-96"
        />
      </div>

      {/* Presentación de la empresa */}
      <div className="text-center py-8 px-4 lg:px-20">
        <h2 className="text-2xl font-bold mb-4">La Calesita</h2>
        <p className="text-lg">
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
        <p className="text-lg mt-4">
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
      </div>

      {/* Galería de imágenes pequeñas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:px-20 py-8">
        <video
          src="/assets/maquina.mp4"
          controls
          className=" w-full h-48 object-cover"
        />
        <img
          src="/assets/oscar.jpeg"
          alt="Golosinas en producción"
          className="w-full h-48 object-cover"
        />
        <video
          src="/assets/empaqueta2.mp4"
          controls
          className="w-full h-48 object-cover"
        />
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

export default ComoTrabajamos;
