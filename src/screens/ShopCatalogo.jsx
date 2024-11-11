import React, { useEffect, useState } from 'react';
import { AiOutlineFilter } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import rapi from '../Images/rapi.png';
import pago from '../Images/pago.png';
import mastercard from '../Images/mastercard.png';
import visa from '../Images/visa.png';
import whatsap from '../Images/whatsap.png';
import fondo from '../Images/fondo.png'; // Ruta de la imagen de fondo

const ShopCatalogo = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const category = sp.get("category") || "all";
  const query = sp.get("query") || "all";

  const getCategories = async () => {
    try {
      const { data } = await axios.get("/api/products/categories");
      setCategories(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    const filterQuery = filter.query || query;

    return {
      pathname: "/search",
      search: `?category=${filterCategory}&query=${filterQuery}`,
    };
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("/api/products/search", {
          params: { category, query },
        });
        setProducts(data);
      } catch (e) {
        console.log("Error fetching products:", e);
      }
    };

    getProducts();
    getCategories();
  }, [category, query]);

  const closeMenu = () => setShowFilterMenu(false);

  return (
    <div className="min-h-screen flex flex-col" // Contenedor principal con `flex flex-col`
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Contenido principal */}
      <div className="flex-grow p-20">
        <div className='flex'>
          <AiOutlineFilter
            size={30}
            color='#f2f2f2'
            onClick={() => setShowFilterMenu(true)}
            cursor="pointer"
          />
          {showFilterMenu && (
            <div 
              className="flex pl-6 animate-[opening_is_ease-in-out] flex-col w-[70%] h-screen p-4 absolute bg-[#d9d9d9] rounded-sm"
              style={{ zIndex: 50 }}
            >
              <div className='flex flex-col p-2'>
                <h3 className='text-lg font-medium'>Categorías</h3>
                <Link className='p-1' onClick={closeMenu} to={getFilterUrl({ category: "all" })}>
                  All
                </Link>
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    onClick={closeMenu}
                    to={getFilterUrl({ category: cat })}
                    className="pt-1"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <h2 className='text-3xl font-pacifico text-center mt-2 mb-2'>Productos disponibles</h2>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6'>
          {products.map((p) => (
            <div
              key={p.image}
              className="flex items-center p-4 rounded-md shadow-md"
            >
              <Link to={`/product/${p.slug}`}>
                <img className="object-contain w-32 h-32" src={p.image} alt={p.name} />
              </Link>
              <div className="border-l border-gray-300 mx-4 h-full"></div>
              <div className="flex flex-col text-left">
                <p className="text-lg font-semibold">{p.name}</p>
                <p className="text-sm text-gray-600 mt-1">{p.description}</p>
                <p className="text-sm text-gray-600 mt-1">Unidades: {p.units}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#603319] text-white py-10 px-6 w-full mt-auto"> {/* Color de fondo marrón oscuro */}
        <div className="flex flex-col md:flex-row justify-around items-start">
          <div>
            <h4 className="font-bold mb-4">Seguinos</h4>
            <div className="flex space-x-4">
              <FaInstagram className="text-white animate-bounce" size={30} />
              <FaFacebookF className="text-white animate-bounce" size={30} />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contáctanos</h4>
            <p> +54 9 387-5952017</p>
            <p>calesita@gmail.com</p>
            <p>La Calesita Golosinas, Pellegrini 903, A4400 Salta</p>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="flex space-x-4">
              <img src={mastercard} alt="Mastercard" className="w-12 h-7 rounded-lg" />
              <img src={visa} alt="Visa" className="w-12 h-7 rounded-lg" />
              <img src={pago} alt="Pago Fácil" className="w-12 h-7 rounded-lg" />
              <img src={rapi} alt="RapiPago" className="w-12 h-7 rounded-lg" />
            </div>
          </div>
        </div>
        <div className="fixed bottom-10 right-10 animate-bounce-custom">
          <a href="https://wa.me/5493875952017" target="_blank" rel="noopener noreferrer">
            <img src={whatsap} alt="WhatsApp" className="w-12 transition-transform duration-300 ease-in-out hover:scale-125 animate-bounce" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ShopCatalogo;
