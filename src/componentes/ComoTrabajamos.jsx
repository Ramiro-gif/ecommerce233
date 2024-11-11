import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

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
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
        <p className="text-lg mt-4">
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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

export default ComoTrabajamos;
