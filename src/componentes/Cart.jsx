import React, { useContext } from "react";
import { StoreContext } from "../store";
import toast, { Toaster } from "react-hot-toast";
import fondo from '../Images/fondo.png';

const Cart = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { cartItems } = state.cart;

  const handleRemove = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const handleOrder = () => {
    if (cartItems.length === 0) {
      toast.error("Tu carrito está vacío. Agrega productos antes de ordenar.");
      return;
    }

    const phoneNumber = "56976073141"; // Número de WhatsApp
    const productList = cartItems.map((item) => `- ${item.name}`).join("\n");
    const message = `Hola! Estoy interesado/a en los siguientes productos:\n\n${productList}\n\nPor favor, envíenme más detalles.`;

    // Generar el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank"); // Abre el enlace en una nueva pestaña

    // Mostrar notificación
    toast.success("Tu pedido ha sido realizado con éxito. ¡Te responderemos en breve!");

    // Vaciar el carrito
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div
      className="min-h-screen flex flex-col p-20"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex-grow p-4 mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Carrito de compras</h1>
        {cartItems.length === 0 ? (
          <p className="text-center">No hay productos en el carrito.</p>
        ) : (
          <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between border-b border-gray-200 p-4"
                >
                  {/* Imagen del producto */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image || "https://via.placeholder.com/80"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md border border-gray-300"
                    />
                    {/* Detalles del producto */}
                    <div>
                      <p className="font-semibold">{item.name}</p>
                    </div>
                  </div>
                  {/* Botón de eliminar */}
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleRemove(item)}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>

            {/* Botón de ordenar */}
            <button
              onClick={handleOrder}
              className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Ordenar
            </button>

            {/* Mensaje informativo */}
            <p className="mt-4 text-sm text-gray-600">
              Los detalles de tu pedido serán enviados vía WhatsApp al número asociado. Presiona "Ordenar" para continuar.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
