import React, { useEffect, useState } from 'react';
import { AiOutlineFilter, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

const ShopCatalogo = () => {
  const [products, setProducts] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);

  const category = sp.get("category") || "all";
  const query = sp.get("query") || "all";

  // Obtener categorías desde la API
  const getCategories = async () => {
    try {
      const { data } = await axios.get("/api/products/categories");
      console.log("Categories data:", data);  // Verificar que se reciban bien las categorías
      setCategories(data);
    } catch (e) {
      console.log(e);
    }
  };

  // Función para obtener la URL de los filtros aplicados
  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    const filterQuery = filter.query || query;

    return {
      pathname: "/search",
      search: `?category=${filterCategory}&query=${filterQuery}`,  // Incluyendo solo los filtros necesarios
    };
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("/api/products/search", {
          params: {
            category: category,
            query: query,
          },
        });
        console.log("Products data:", data); // Agrega este log para ver los datos
        setProducts(data);
      } catch (e) {
        console.log("Error fetching products:", e); // Log del error si hay uno
      }
    };
    
    getProducts();
    getCategories();
  }, [category, query]);

  const closeMenu = () => {
    setShowFilterMenu(false);
  };

  return (
    <div className='bg-yellow-500'>
      <div className='flex'>
        <AiOutlineFilter
          size={30}
          color='#f2f2f2'
          onClick={() => setShowFilterMenu(true)}
          cursor="pointer"
        />
        {showFilterMenu && (
          <div className="flex pl-6 animate-[opening_is_ease-in-out] flex-col w-[70%] h-screen p-4 absolute bg-[#D9D9D9] rounded-sm">
            
            <div className='flex flex-col p-2'>
              <h3 className='text-lg font-medium'>Categorías</h3>
              <Link
                className='p-1'
                onClick={closeMenu}
                to={getFilterUrl({ category: "all" })}>
                All
              </Link>

              {/* Mostramos las categorías correctamente */}
              {categories.length ? (
                categories.map((category) => (
                  <Link
                    key={category}
                    onClick={closeMenu}
                    to={getFilterUrl({ category })}
                    className="pt-1"
                  >
                    {category} {/* Mostramos el nombre de la categoría */}
                  </Link>
                ))
              ) : (
                <AiOutlineLoading3Quarters
                  size={25}
                  color="#3c54a1"
                  className="animate-spin"
                />
              )}
            </div>
          </div>
        )}
      </div>
      <section className='grid md:grid-cols-3 grid-cols-2 h-[80%] gap-3 p-2 pt-10'>
  {products[0] !== undefined &&
    products.map(p => (
      <div
        key={p.image}
        className="flex h-min bg-[#ffffff] flex-col items-center justify-items-center p-8 rounded-md shadow-md"
      >
        <Link to={`/product/${p.slug}`}>
          <img className="object-contain w-full h-48" src={p.image} alt="product" />
        </Link>
        <div className="flex flex-col items-center justify-center pt-4">
          <p className="text-lg font-semibold text-center">{p.name}</p> {/* Mostrar el nombre del producto */}
          <p className="text-[#7a7a7a] text-center">{p.description}</p>
        </div>
      </div>
    ))}
</section>
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

export default ShopCatalogo;
