import WebHeader from "@/components/WebHeader";
import ProductGrid from "@/components/ProductGrid";
import CalendarTimePicker from "@/components/CalendarTimePicker";
import Checkout from "@/components/Checkout";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useCart } from "@/CartContext";
import { useTheme } from "@mui/material/styles";

export default function WebStore() {
  const theme = useTheme();
  const [calendarValue, setCalendarValue] = useState();
  const { calculateBasketTotal, displayCart } = useCart();

  const handleCalendarChange = (value) => {
    setCalendarValue(value);
  };

  return (
    <main
      style={{ backgroundColor: theme.palette.secondary.main, height: "100%" }}
    >
      <div className="flex flex-col items-center">
        <WebHeader />
        <ProductGrid />
        <CalendarTimePicker updateCalendarState={handleCalendarChange} />
        {displayCart()}
        <Typography variant="h3" align="center" className="p-5">
          {`£${calculateBasketTotal().toFixed(2)}`}
        </Typography>
        <Checkout />
      </div>
    </main>
  );
}
