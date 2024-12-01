import { createContext, useReducer } from "react";

export const StoreContext = createContext();

const initialState = {
  cart: {
    cartItems: [], // Arreglo vacío inicial para los productos en el carrito
  },
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };

    case "REMOVE_FROM_CART":
      const updatedCartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, cart: { ...state.cart, cartItems: updatedCartItems } };

      case "CLEAR_CART":
        return {
          ...state,
          cart: { ...state.cart, cartItems: [] }, // Vacía correctamente el carrito
        };

    default:
      return state;
  }
};

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
