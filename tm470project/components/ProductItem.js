import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function ProductItem({ width, height, smWidth, smHeight, icons = "true" }) {
  const addAndRemoveIcon = icons === "true";
  return (
    <div className="flex flex-row">
      <img
        src={`https://placehold.co/${width}x${height}?text=Placeholder`}
        srcSet={`https://placehold.co/${smWidth}x${smHeight}?text=Placeholder 600w`}
        alt="Placeholder image"
        className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4"
      />
      {addAndRemoveIcon && (
        <div className="flex flex-col">
          <AddIcon fontSize="large" />
          <RemoveIcon fontSize="large" />
        </div>
      )}
    </div>
  );
}
