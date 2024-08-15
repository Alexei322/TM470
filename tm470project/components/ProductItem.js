import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useCart } from "@/CartContext";
export default function ProductItem({
  width,
  height,
  name,
  price,
  icons = "true",
  fixHeightWidth = "true",
  flexDirectionOuter = "row",
  flexDirectionInner = "col",
  calendarTimeValue,
}) {
  const [isAddIconHovered, setIsAddIconHovered] = useState(false);
  const [isRemoveIconHovered, setIsRemoveIconHovered] = useState(false);

  const heightWidthAdjust = fixHeightWidth === "true" ? "w-36 h-36" : "";
  const flexOuterAdjust = flexDirectionOuter === "row" ? "row" : "col";
  const flexInnerAdjust = flexDirectionInner === "row" ? "row" : "col";

  const product = { name: name, price: price, orderDateTime: calendarTimeValue };

  const { addToCart, removeFromCart } = useCart();
  
  

  return (
    <div className={`flex flex-col justify-center items-center`}>
      <Typography variant="h6" align="center" className="p-5">
        {`${name} - from £${price}`}
      </Typography>
      <div
        className={`flex flex-${flexOuterAdjust} ${heightWidthAdjust} items-center`}
      >
        <img
          src={`https://placehold.co/${width}x${height}?text=Placeholder`}
          alt="Placeholder image"
          className="w-full sm:w-1/2 md:w-2/3 lg:w-4/4"
        />
        {icons === "true" && (
          <div
            className={`flex flex-${flexInnerAdjust} justify-center items-center w-1/3 sm:w-1/2 md:w-2/3 lg:w-4/4`}
          >
            <AddIcon
              onMouseEnter={() => setIsAddIconHovered(true)}
              onMouseLeave={() => setIsAddIconHovered(false)}
              style={{
                color: isAddIconHovered ? "blue" : "black",
                fontSize: isAddIconHovered ? "45px" : "35px", // Use inline style for fontSize
                transition: "font-size 0.3s", // Optional: smooth transition for the size change
              }}
              onClick={() => addToCart(product)}
            />
            <RemoveIcon
              fontSize="large"
              onMouseEnter={() => setIsRemoveIconHovered(true)}
              onMouseLeave={() => setIsRemoveIconHovered(false)}
              style={{
                color: isRemoveIconHovered ? "blue" : "black",
                fontSize: isRemoveIconHovered ? "45px" : "35px", // Use inline style for fontSize
                transition: "font-size 0.5s", // Optional: smooth transition for the size change
              }}
              onClick={() => removeFromCart(product)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
