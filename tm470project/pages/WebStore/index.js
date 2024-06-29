import WebHeader from "@/components/WebHeader";
import ProductGrid from "@/components/ProductGrid";
import CalendarTimePicker from "@/components/CalendarTimePicker";
import { Typography, Button } from "@mui/material";
import { use, useState } from "react";
import { useCart } from "@/CartContext";
export default function WebStore() {
  const [calendarValue, setCalendarValue] = useState();
  const {calculateBasketTotal} = useCart();
  const handleCalendarChange = (value) => {
    setCalendarValue(value);
  };
  
  
  
  return (
    <main>
      <div className="flex flex-col items-center">
        <WebHeader />
        <ProductGrid />
        <CalendarTimePicker updateCalendarState={handleCalendarChange}/>
        <Typography variant="h3" align="center" className="p-5">
          {`£${calculateBasketTotal().toFixed(2)}`}
        </Typography>
        <Button variant="contained" style={{ width: "25%" }}>
          Checkout
        </Button>
      </div>
    </main>
  );
}
