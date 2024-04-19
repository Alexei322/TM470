import ProductItem from "@/components/ProductItem";

export default function PictureGrid() {
  return (
    <div
      className={`grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}
    >
      <ProductItem width={400} height={100} fixHeightWidth="false"/>
      <ProductItem width={400} height={100} fixHeightWidth="false"/>
      <ProductItem width={400} height={100} fixHeightWidth="false"/>
      <ProductItem width={400} height={100} fixHeightWidth="false"/>
      <ProductItem width={400} height={100} fixHeightWidth="false"/>
      <ProductItem width={400} height={100} fixHeightWidth="false"/>
      <ProductItem width={400} height={100} fixHeightWidth="false"/>
      <ProductItem width={400} height={100} fixHeightWidth="false"/>
      <ProductItem width={400} height={100} fixHeightWidth="false"/>
      <ProductItem width={400} height={100} fixHeightWidth="false"/>
      <ProductItem width={400} height={100} fixHeightWidth="false"/>
      <ProductItem width={400} height={100} fixHeightWidth="false"/>
    </div>
  );
}
