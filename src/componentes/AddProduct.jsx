import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({
    id: '', // Agregamos el campo id
    name: '',
    description: '',
    category: '',
    image: ''
  });

  // Obtener productos al montar el componente
  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error al obtener productos:', error);
      });
  }, []);

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  // Manejar subida de imagen
  const handleFileChange = (e) => {
    setProductData({
      ...productData,
      image: e.target.files[0] // Subir el archivo de imagen
    });
  };

  // Enviar cambios para agregar o modificar producto
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in productData) {
      formData.append(key, productData[key]);
    }

    if (productData.id) {
      axios.put(`/api/products/${productData.id}`, formData)
        .then(response => {
          console.log('Producto modificado:', response.data);
          setProductData({
            id: '',
            name: '',
            description: '',
            category: '',
            image: ''
          });
          axios.get('/api/products').then(response => setProducts(response.data));
        })
        .catch(error => {
          console.error('Error al modificar producto:', error);
        });
    } else {
      axios.post('/api/products', formData)
        .then(response => {
          console.log('Producto agregado:', response.data);
          setProductData({
            id: '',
            name: '',
            description: '',
            category: '',
            image: ''
          });
          axios.get('/api/products').then(response => setProducts(response.data));
        })
        .catch(error => {
          console.error('Error al agregar producto:', error);
        });
    }
  };

  // Editar producto existente
  const handleEdit = (product) => {
    setProductData({
      id: product._id,
      name: product.name,
      description: product.description,
      category: product.category,
      image: product.image
    });
  };

  // Eliminar producto existente
  const handleDelete = (id) => {
    axios.delete(`/api/products/${id}`)
      .then(response => {
        console.log('Producto eliminado:', response.data);
        // Recargar la lista de productos
        setProducts(products.filter((product) => product._id !== id));
      })
      .catch(error => {
        console.error('Error al eliminar producto:', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Agregar/Modificar Producto</h2>

      {/* Tabla de productos existentes */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Productos Existentes</h3>
        <table className="min-w-full bg-white border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Descripción</th>
              <th className="border p-2">Categoría</th>
              <th className="border p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">{product.description}</td>
                <td className="border p-2">{product.category}</td>
                <td className="border p-2">
                  <button
                    className="bg-yellow-500 text-white p-1 mr-2"
                    onClick={() => handleEdit(product)}
                  >
                    Modificar Producto
                  </button>
                  <button
                    className="bg-red-500 text-white p-1"
                    onClick={() => handleDelete(product._id)}
                  >
                    Eliminar Producto
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Formulario para agregar/modificar producto */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">Nombre del Producto</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="description">Descripción</label>
          <input
            type="text"
            id="description"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="category">Categoría</label>
          <input
            type="text"
            id="category"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="image">Imagen del Producto</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="border p-2 w-full"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2">
          {productData.id ? 'Aceptar Modificación' : 'Agregar Producto'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
