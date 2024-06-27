import WebHeader from "@/components/WebHeader";
import ProductGrid from "@/components/ProductGrid";
import CalendarTimePicker from "@/components/CalendarTimePicker";
import { Typography, Button } from "@mui/material";
export default function WebStore() {
  return (
    <main >
      <div className="flex flex-col items-center">
        <WebHeader />
        <ProductGrid />
        <CalendarTimePicker />
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
