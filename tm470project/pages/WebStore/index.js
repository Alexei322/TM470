import WebHeader from "@/components/WebHeader";
import ProductGrid from "@/components/ProductGrid";
import CalendarTimePicker from "@/components/CalendarTimePicker";
import Checkout from "@/components/Checkout";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useCart } from "@/CartContext";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "@/AuthContext";

export default function WebStore() {
  const theme = useTheme();
  const [calendarTimeValue, setCalendarTimeValue] = useState();
  const { calculateBasketTotal, displayCart, clearCart, isCartEmpty } =
    useCart();
  const { isAuthenticated } = useAuth();

  const handleCalendarTimeChange = (value) => {
    setCalendarTimeValue({
      day: value.$D,
      month: value.$M + 1,
      year: value.$y,
      hour: value.$H,
      minute: value.$m.toString().padStart(2, "0"),
    });
  };

  return (
    <main style={{ backgroundColor: theme.palette.secondary.main }}>
      <div className="flex flex-col items-center">
        <WebHeader />
        <ProductGrid calendarTimeValue={calendarTimeValue} />
        <CalendarTimePicker
          value={calendarTimeValue}
          updateCalendarState={handleCalendarTimeChange}
        />
        {displayCart()}
        <Typography variant="h3" align="center" className="p-5">
          {`£${calculateBasketTotal().toFixed(2)}`}
        </Typography>
        {!isAuthenticated ? (
          <Typography variant="h5" align="center" className="p-5">
            Please sign in to checkout
          </Typography>
        ) : (
          <> 
            <Checkout />
            {!isCartEmpty() && <Button style={{color:"black"}} onClick={clearCart}>Clear cart</Button>}
          </>
        )}
      </div>
    </main>
  );
}
