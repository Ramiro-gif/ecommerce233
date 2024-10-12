import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CarouselPage from '../componentes/CarouselPage.jsx';
import Productos from '../componentes/Productos.jsx';

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
      <section className="flex flex-col md:flex-row w-full h-auto bg-gradient-to-r from-yellow-500 to-yellow-300 py-10 px-6">
        {/* Contenedor de texto */}
        <div className='w-full md:w-1/2 flex flex-col justify-center items-start p-10'>
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
            className="text-lg md:text-xl text-white"
            style={{ lineHeight: '1.6', marginBottom: '20px' }}
          >
            Comenzamos en el año 2007 con el objetivo de acercarte la mejor variedad y los mejores
            precios de golosinas y snacks y desde ese momento no dejamos de crecer!
            <br /><br />
            Hoy tenemos nueve tiendas ubicadas en algunos de los puntos más transitados de la ciudad
            de Buenos Aires y estamos muy felices de seguir creciendo por toda la ciudad.
          </p>
          <button
            className="px-6 py-3 bg-orange-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-orange-700"
          >
            CONOCENOS
          </button>
        </div>

        {/* Contenedor del video */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-5">
          <video
            className="w-full h-auto max-h-80 object-contain rounded-lg"
            src={"/assets/calesita2.mp4"}
            controls
          />
        </div>
      </section>

      {/* Sección Productos */}
      <div className='bg-gradient-to-t to-[#c475b2] from-[#c9c8c7]'>
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
          <div className="flex justify-center space-x-4 py-5">
            
            <Link to="/catalogop">
              <img
                ref={(el) => (imgRefs.current[1] = el)}
                src={"/assets/snacksaldo.png"}
                alt="Productos Salados"
                className="w-full h-48 object-cover rounded-md hover:opacity-80 transition-opacity duration-300 opacity-0"
              />
              <p
                className='text-center text-2xl font-pacifico text-[#FFCC00]'
                style={{
                  textShadow: `1px -2px 0 #283593, -2px 2px 0 #283593, 1px 2px 0 #283593`,
                  letterSpacing: "3px",
                  margin: "0 5px",
                }}
              >
                SALADOS
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
