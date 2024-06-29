import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((cart) => {
      const itemIndex = cart.findIndex((item) => item.name === product.name);
      if (itemIndex !== -1) {
        const newCart = [...cart];
        newCart[itemIndex].quantity += 1;
        return newCart;
      } else {
        return [...cart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((cart) => {
      const itemIndex = cart.findIndex((item) => item.name === product.name);
      if (itemIndex !== -1) {
        const newCart = [...cart];
        if (newCart[itemIndex].quantity > 0) {
          newCart[itemIndex].quantity -= 1;
        }
        if (newCart[itemIndex].quantity === 0) {
          newCart.splice(itemIndex, 1);
        }
        return newCart;
      } else {
        return cart;
      }
    });
  };

  const calculateBasketTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  console.log(cart);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, calculateBasketTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}

export default CartContext;
