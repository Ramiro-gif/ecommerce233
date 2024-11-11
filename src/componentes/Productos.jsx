import React, { useState, useEffect } from 'react';
import fondotrigo from '../Images/fondotrigo.png';
import { Link } from 'react-router-dom';

const Productos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newProductsIndex, setNewProductsIndex] = useState(0);

  const images = [
    { src: '/assets/destacado.png', alt: 'snacks' },
    { src: '/assets/destaca2.png', alt: 'snacks' },
    { src: '/assets/destaca3.png', alt: 'snacks' },
    { src: '/assets/destaca3.png', alt: 'snacks' },
  ];

  const newProducts = [
    { src: '/assets/destaca3.png', alt: 'snacks' },
    { src: '/assets/destaca3.png', alt: 'snacks' },
    { src: '/assets/destaca3.png', alt: 'snacks' },
    { src: '/assets/destaca3.png', alt: 'snacks' },
  ];

  const itemsPerPage = window.innerWidth < 768 ? 1 : 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - itemsPerPage ? prevIndex + 1 : 0
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length, itemsPerPage]);

  useEffect(() => {
    const newProductsInterval = setInterval(() => {
      setNewProductsIndex((prevIndex) =>
        prevIndex < newProducts.length - itemsPerPage ? prevIndex + 1 : 0
      );
    }, 2000);

    return () => clearInterval(newProductsInterval);
  }, [newProducts.length, itemsPerPage]);

  const nextSlide = () => {
    if (currentIndex < images.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextNewProductsSlide = () => {
    if (newProductsIndex < newProducts.length - itemsPerPage) {
      setNewProductsIndex(newProductsIndex + 1);
    }
  };

  const prevNewProductsSlide = () => {
    if (newProductsIndex > 0) {
      setNewProductsIndex(newProductsIndex - 1);
    }
  };

  return (
    <div
      className="flex flex-col bg-gradient-to-r to-[#800040] from-[#eeb926] py-10 border-4 border-gray-200 rounded-lg shadow-lg p-4"
      style={{
        backgroundImage: `url(${fondotrigo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="font-pacifico text-2xl sm:text-3xl lg:text-4xl text-center text-[#4c4ee7]" style={{ textShadow: '2px 4px 0 #ffcc80', marginBottom: '30px' }}>
        Productos Destacados
      </h2>

      <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-2"
            >
              <div className="bg-white border-4 border-gray-200 rounded-lg shadow-lg p-4 max-w-xs sm:max-w-sm mx-auto">
                <img
                  className="w-full h-auto object-contain mx-auto"
                  src={image.src}
                  alt={image.alt}
                />
                <p className="text-center mt-2 text-sm sm:text-base lg:text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          &#10095;
        </button>
      </div>

      <div className="relative w-full max-w-3xl mx-auto overflow-hidden mt-10">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${newProductsIndex * (100 / itemsPerPage)}%)` }}
        >
          {newProducts.map((image, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-2"
            >
              <div className="bg-white border-4 border-gray-200 rounded-lg shadow-lg p-4 max-w-xs sm:max-w-sm mx-auto">
                <img
                  className="w-full h-auto object-contain mx-auto"
                  src={image.src}
                  alt={image.alt}
                />
                <p className="text-center mt-2 text-sm sm:text-base lg:text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevNewProductsSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          &#10094;
        </button>
        <button
          onClick={nextNewProductsSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Productos;
