import { Typography } from "@mui/material";

export default function CartItem({item}) {
  return (
    <>
      <Typography color="white">{item.name}</Typography>
      <Typography color="white">{`${item.quantity} x £${item.price}`}</Typography>
      <Typography color="white">{`${item.orderDateTime.day}/${item.orderDateTime.month}/${item.orderDateTime.year} at ${item.orderDateTime.hour}:${item.orderDateTime.minute}`}</Typography>

    </>
  );
}
