import { Typography } from "@mui/material";
import { useCart } from "@/CartContext";
import { useTheme } from "@emotion/react";
export default function orderConfirmation() {
    const {cart} = useCart();
    const theme = useTheme();
    return (
        <div >
            <Typography variant="h1" align="center">Order confirmed</Typography>
            <Typography variant="h3" align="center">Thank you for your order</Typography>
        </div>
    ) 
}