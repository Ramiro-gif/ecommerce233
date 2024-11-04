import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineFilter, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsCartPlus, BsChevronLeft } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

const prices = [
  {
    name: "$10 to $25",
    value: "10-25",
  },
  {
    name: "$25 to $50",
    value: "25-50",
  },
  {
    name: "$50 to $200",
    value: "50-200",
  },
];

const ratings = [
  {
    name: "4 stars & up",
    rating: 4,
  },
  {
    name: "3 stars & up",
    rating: 3,
  },
  {
    name: "2 stars & up",
    rating: 2,
  },
  {
    name: "1 star & up",
    rating: 1,
  },
];

const ShopCatalogo = () => {
  const [products, setProducts] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);

  const category = sp.get("category") || "all";
  const query = sp.get("query") || "all";
  const price = sp.get("price") || "all";
  const rating = sp.get("rating") || "all";

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
    const filterPrice = filter.price || price;  // Añadido manejo de price
    const filterRating = filter.rating || rating;  // Añadido manejo de rating

    return {
      pathname: "/search",
      search: `?category=${filterCategory}&query=${filterQuery}&price=${filterPrice}&rating=${filterRating}`,  // Incluyendo todos los filtros
    };
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("/api/products/search", {
          params: {
            category: category,
            query: query,
            price: price,
            rating: rating,
          },
        });
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    };
    getProducts();
    getCategories();
  }, [category, rating, price]);

  const closeMenu = () => {
    setShowFilterMenu(false);
  };

  return (
    <div className='bg-green-600'>
      <div className='flex'>
        <AiOutlineFilter
          size={30}
          color='#f2f2f2'
          onClick={() => setShowFilterMenu(true)}
          cursor="pointer"
        />
        {showFilterMenu && (
          <div className="flex pl-6 animate-[opening_is_ease-in-out] flex-col w-[70%] h-screen p-4 absolute bg-[#D9D9D9] rounded-sm">
            <BsChevronLeft onClick={closeMenu} cursor="pointer" />
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
            <p className='mt-8 pb-2 font-medium'>Price</p>
            <Link
              onClick={closeMenu}
              to={getFilterUrl({ price: "all" })}
              className="pt-1"
            >
              All
            </Link>

            {prices.map((p) => (
              <Link
                key={p.value}
                to={getFilterUrl({ price: p.value })}
                onClick={closeMenu}
                className="pt-1"
              >
                {p.name}
              </Link>
            ))}
            <p className="mt-8 pb-2 font-medium">Rating</p>
            <Link
              onClick={closeMenu}
              to={getFilterUrl({ rating: "all" })}
              className="pt-1"
            >
              All
            </Link>
            {ratings.map((r) => (
              <Link
                key={r.rating}
                to={getFilterUrl({ rating: r.rating })}
                onClick={closeMenu}
                className="pt-1"
              >
                {r.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <section className='grid grid-cols-2 h-[80%] gap-3 p-2 pt-10'>
        {products[0] !== undefined &&
          products.map(p => (
            <div
              key={p.image}
              className='flex h-min bg-[#D9D9D9] flex-col items-center justify-items-center p-8 rounded-md'>
              <Link to={`/product/${p.slug}`}>
                <img className='object-contain' src={p.image} alt="product" />
              </Link>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[#7a7a7a] pr-3'>{p.description}</p>
                <BsCartPlus
                  key={p.id}
                  size={25}
                  cursor="pointer"
                  color="#646464"
                />
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default ShopCatalogo;
