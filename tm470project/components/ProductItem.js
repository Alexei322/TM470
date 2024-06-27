import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
export default function ProductItem({
  width,
  height,
  icons = "true",
  fixHeightWidth = "true",
  flexDirectionOuter = "row",
  flexDirectionInner = "col",
}) {
  const [isAddIconHovered, setIsAddIconHovered] = useState(false);
  const [isRemoveIconHovered, setIsRemoveIconHovered] = useState(false);
  

  const heightWidthAdjust = fixHeightWidth === "true" ? "w-36 h-36" : "";
  const flexOuterAdjust = flexDirectionOuter === "row" ? "row" : "col";
  const flexInnerAdjust = flexDirectionInner === "row" ? "row" : "col";

  return (
    <div
      className={`flex flex-${flexOuterAdjust} ${heightWidthAdjust} align-center `}
    >
      <img
        src={`https://placehold.co/${width}x${height}?text=Placeholder`}
        alt="Placeholder image"
        className="w-full sm:w-1/2 md:w-2/3 lg:w-4/4"
      />
      {icons === "true" && (
        <div
          className={`flex flex-${flexInnerAdjust} justify-center w-1/3 sm:w-1/2 md:w-2/3 lg:w-4/4`}
        >
          <AddIcon
            onMouseEnter={() => setIsAddIconHovered(true)}
            onMouseLeave={() => setIsAddIconHovered(false)}
            style={{
              color: isAddIconHovered ? "blue" : "black",
              fontSize: isAddIconHovered ? "45px" : "35px", // Use inline style for fontSize
              transition: "font-size 0.3s", // Optional: smooth transition for the size change
            }}
          />
          <RemoveIcon fontSize="large" 
          onMouseEnter={() => setIsRemoveIconHovered(true)}
          onMouseLeave={() => setIsRemoveIconHovered(false)}
          style={{
            color: isRemoveIconHovered ? "blue" : "black",
            fontSize: isRemoveIconHovered ? "45px" : "35px", // Use inline style for fontSize
            transition: "font-size 0.3s", // Optional: smooth transition for the size change
          }}/>
        </div>
      )}
    </div>
  );
}
