import WebHeader from "@/components/WebHeader";
import ProductGrid from "@/components/ProductGrid";
import CalendarTimePicker from "@/components/CalendarTimePicker";
import { Typography, Button } from "@mui/material";
import { use, useState } from "react";
export default function WebStore() {
  const [calendarValue, setCalendarValue] = useState();
  const handleCalendarChange = (value) => {
    setCalendarValue(value);
  };
  const [cart, setCart] = useState([]);
  
  
  return (
    <main>
      <div className="flex flex-col items-center">
        <WebHeader />
        <ProductGrid />
        <CalendarTimePicker updateCalendarState={handleCalendarChange}/>
        <Typography variant="h3" align="center" className="p-5">
          £~
        </Typography>
        <Button variant="contained" style={{ width: "25%" }}>
          Checkout
        </Button>
      </div>
    </main>
  );
}
