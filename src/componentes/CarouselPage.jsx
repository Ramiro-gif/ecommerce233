import React, { useState, useEffect } from 'react';
import img1 from "../Images/img1.png";
import carousel2 from "../Images/carousel2.png";
import carousel from "../Images/carousel.png";

const images = [ carousel, carousel2];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Función para avanzar al siguiente slide
  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 100);
  };

  // Función para retroceder al slide anterior
  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsAnimating(false);
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="carouselExampleControls" className="relative w-full h-auto overflow-hidden max-w-[90%] mx-auto border-4 border-transparent shadow-lg hover:shadow-xl mt-20"> {/* Limita el ancho máximo y centra */}
      <div className="relative flex transition-transform duration-[600ms] ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} className="block w-full h-full max-h-[900px] object-contain" alt={`Slide ${index + 1}`} /> {/* Ajuste de imagen */}
          </div>
        ))}
      </div>

      {/* Botón de slide anterior */}
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

      {/* Botón de slide siguiente */}
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
  );
};

export default CustomCarousel;
