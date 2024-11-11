import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CarouselPage from '../componentes/CarouselPage.jsx';
import Productos from '../componentes/Productos.jsx';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

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
    <div>
      <CarouselPage />

      {/* Nueva sección: Texto y Video al lado */}
      <section className="flex flex-col md:flex-row w-full h-auto bg-gradient-to-r from-yellow-500 to-yellow-300 py-10 px-6 ">
        {/* Contenedor de texto */}
        <div className='w-full md:w-1/2 flex flex-col justify-center items-start p-10 border-4 border-transparent shadow-lg hover:shadow-xl'>
          <h2
            className="text-4xl md:text-5xl font-pacifico text-orange-600"
            style={{
              textShadow: `1px 1px 0 #ffcc80`,
              marginBottom: "20px",
            }}
          >
            Somos <br/> La Calesita 
          </h2>
          <p
            className="text-lg md:text-xl text-white "
            style={{ lineHeight: '1.6', marginBottom: '20px' }}
          >
            Comenzamos en el año 2007 con el objetivo de acercarte la mejor variedad y los mejores
            precios de golosinas y snacks y desde ese momento no dejamos de crecer!
            <br /><br />
            Hoy tenemos nueve tiendas ubicadas en algunos de los puntos del norte Argentino.
          </p>
          <button className="px-6 py-3 bg-orange-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-orange-700">
          <Link to="/comoTrabajamos" className="text-white no-underline">
            CONÓCENOS
          </Link>
          </button>
        </div>

        {/* Contenedor del video */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-5 border-4 border-transparent shadow-lg hover:shadow-xl">
          <video
            className="w-full h-auto max-h-80 object-contain rounded-lg"
            src={"/assets/calesita2.mp4"}
            controls
          />
        </div>
      </section>

      {/* Sección Productos */}
      <div className='bg-gradient-to-t to-[#e2e616] from-[#c9c8c7]'>
        <Productos />

        <div className='bg-gradient-to-t to-[#f7e2f2] from-[#eeb926]'>
          <div
            className="text-4xl flex pt-10 pb-10 items-center justify-center font-pacifico text-[#ff3300] opacity-0"
            style={{
              textShadow: `1px -2px 0 #283593, -2px 2px 0 #283593, 1px 2px 0 #283593`,
              letterSpacing: "3px",
              margin: "0 5px",
            }}
            ref={productosRef}
          >
            <h2>Nuestros Productos</h2>
          </div>

          {/* Contenedor de imágenes con enlaces */}
          <div className="flex justify-center space-x-4 py-5 ">
            
            <Link to="/catalogop">
              <img
                ref={(el) => (imgRefs.current[1] = el)}
                src={"/assets/snacksaldo.png"}
                alt="Productos Salados"
                className="w-full h-48 object-cover rounded-md hover:opacity-80 transition-opacity duration-300 opacity-0 "
              />
              
            </Link>
          </div>
        </div>
      </div>

      {/* Nueva sección: Footer */}
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

export default Home;
