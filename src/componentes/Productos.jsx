import React, { useEffect, useRef } from 'react';

const Productos = () => {
  const productosRef = useRef(null);
  const imgRefs = useRef([]);

  useEffect(() => {
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
    <div className="flex flex-col">
      <div ref={productosRef} >
        <h2 className="font-pacifico text-4xl pt-5 text-center text-[#4c4ee7]"
        style={{
          textShadow: `2px 4px 0 #ffcc80`,
          marginBottom: "20px",
        }}>
          Productos  Destacados
        </h2>

        {/* Fragancias Section */}
        <section className="grid grid-cols-2 gap-6 pt-6">
          <div className="flex flex-col justify-around items-end pt-5">
            <span className="h-2 w-24 bg-[#ff2e63] flex-end rounded-md"></span>
            <span className="h-2 w-20 bg-[#2d42b8] flex-end rounded-md"></span>
            <span className="h-2 w-16 bg-[#7d32f0] flex-end rounded-md"></span>
          </div>

          <div>
            <img
              ref={(el) => (imgRefs.current[0] = el)}
              className=" opacity-0"
              src="/assets/destacado.png"
              alt="Perfume"
            />
          </div>
        </section>

        {/* Zapatillas Section */}
        <section className="grid pt-6 grid-cols-2 gap-4">
          <div className="bg-gradient-to-t to-[#fce38a] from-[#f38181] flex justify-center items-center p-4 ">
            <img
              ref={(el) => (imgRefs.current[1] = el)}
              src="/assets/destaca2.png"
              alt="Zapatillas"
              className="object-contain hover:cursor-pointer opacity-0"
            />
          </div>
          <div className="bg-gradient-to-t to-[#42e695] from-[#3bb2b8] flex justify-center items-center p-4">
            <img
              ref={(el) => (imgRefs.current[2] = el)}
              src="/assets/destaca3.png"
              alt="Zapatillas"
              className="object-contain hover:cursor-pointer opacity-0"
            />
          </div>
        </section>

        {/* Cocina Section */}
        <section className="grid pt-6 grid-cols-1 gap-4">
          <div className="bg-gradient-to-t to-[#5b247a] from-[#1bcedf] flex justify-center items-center p-4">
            <img
              ref={(el) => (imgRefs.current[3] = el)}
              src="/assets/destaca4.png"
              alt="Cocina"
              className="object-contain hover:cursor-pointer opacity-0"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Productos;
