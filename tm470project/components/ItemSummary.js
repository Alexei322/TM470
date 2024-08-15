import { useCart } from "@/CartContext";
import { Box, Typography } from "@mui/material";
import CartItem from "./CartItem";
import {v4 as uuidv4} from "uuid";

export default function ItemSummary() {
  const { cart, calculateBasketTotal, displayCart } = useCart();
  console.log(cart);

  return (
    <Box>
      {cart.length === 0 ? (
        <Typography color="white">Your cart is empty</Typography>
      ) : (
        cart.map((product) => <CartItem item={product} key={uuidv4()}/>)
      )}
    </Box>
  );
}
