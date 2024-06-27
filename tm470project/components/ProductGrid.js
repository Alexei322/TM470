import ProductItem from "./ProductItem";

export default function ProductGrid() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-10 justify-items-center items-center">
        <ProductItem width={150} height={150} icons="true" />
        <ProductItem width={150} height={150} icons="true" />
        <ProductItem width={150} height={150} icons="true" />
        <ProductItem width={150} height={150} icons="true" />
      </div>
      <div className="flex gap-10 justify-center pt-10">
        <ProductItem width={150} height={150} icons="true" />
        <ProductItem width={150} height={150} icons="true" />
        <ProductItem width={150} height={150} icons="true" />
      </div>
      <div className="flex gap-10 justify-center pt-10">
        <ProductItem
          width={150}
          height={150}
          icons="true"
          flexDirectionOuter="col"
          flexDirectionInner="row"
        />
        <ProductItem
          width={150}
          height={150}
          icons="true"
          flexDirectionOuter="col"
          flexDirectionInner="row"
        />
        <ProductItem
          width={150}
          height={150}
          icons="true"
          flexDirectionOuter="col"
          flexDirectionInner="row"
        />
      </div>
    </div>
  );
}
