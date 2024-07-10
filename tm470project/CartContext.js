import React, { createContext, useContext, useState } from "react";
import { Typography } from "@mui/material";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((cart) => {
      const productExists = cart.some((item) => item.name === product.name);
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
  //   setCart((prevState) => {
  //     const itemIndex = prevState.findIndex(
  //       (item) => item.name === product.name
  //     );
  //     if (itemIndex !== -1) {
  //       const newCart = [...prevState];
  //       newCart[itemIndex].quantity += 1;
  //       return newCart;
  //     } else {
  //       return [...prevState, { ...product, quantity: 1 }];
  //     }
  //   });
  // };

  const removeFromCart = (product) => {
    setCart((cart) => {
      return cart
        .map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  // setCart((cart) => {
  //   const updatedCart = cart
  //     .map((item) => {
  //       if (item.name === product.name && item.quantity > 0) {
  //         return { ...item, quantity: item.quantity - 1 };
  //       }
  //       return item;
  //     })
  //     .filter((item) => item.quantity > 0);

  //   return updatedCart;
  // });

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
        >{`${item.name} - £${item.price} Quantity: ${item.quantity}`}</Typography>
      );
    });
  };

  console.log(cart);

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
