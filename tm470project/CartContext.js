import React, { createContext, useContext, useState } from "react";
import { Typography } from "@mui/material";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  
  const addToCart = (product) => {
    setCart((cart) => {
      // const productExists = cart.some((item) => item.name === product.name);
      const productExists = cart.find((item) => item.name === product.name && item.orderDateTime === product.orderDateTime);
      if (productExists) {
        return cart
          .map((item) =>
            item.name === product.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
          .filter((item) => item.quantity > 0);
      } else {
        return [...cart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((cart) => {
      return cart
        .map((item) =>
          item.name === product.name && item.orderDateTime === product.orderDateTime
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const calculateBasketTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const displayCart = () => {
    let keyVal = 0;
    return cart.map((item) => {
      keyVal++;
      return (
        <Typography
          variant="h6"
          key={keyVal}
        >{`${item.name} - £${item.price} Quantity: ${item.quantity} Time: ${item.orderDateTime.day}/${item.orderDateTime.month}/${item.orderDateTime.year} at ${item.orderDateTime.hour}:${item.orderDateTime.minute}`}</Typography>
      );
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        calculateBasketTotal,
        displayCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}

export default CartContext;
