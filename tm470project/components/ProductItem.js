import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function ProductItem({
  width,
  height,
  icons = "true",
  fixHeightWidth = "true",
  flexDirectionOuter = "row",
  flexDirectionInner = "col",
}) {
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
        <div className={`flex flex-${flexInnerAdjust} justify-center w-1/3 sm:w-1/2 md:w-2/3 lg:w-4/4`}>
          <AddIcon fontSize="large" />
          <RemoveIcon fontSize="large" />
        </div>
      )}
    </div>
  );
}
