import ProductItem from "./ProductItem";

export default function ProductGrid() {
  return <div className="flex flex-row flex-wrap justify-center gap-20">
    <ProductItem width={150} height={150} smWidth="100" smHeight="100" icons="false"/>
    <ProductItem width={150} height={150} smWidth="100" smHeight="100" icons="false"/>
    <ProductItem width={150} height={150} smWidth="100" smHeight="100" icons="false"/>
    <ProductItem width={150} height={150} smWidth="100" smHeight="100" icons="false"/>
    <ProductItem width={150} height={150} smWidth="100" smHeight="100" icons="false"/>
    <ProductItem width={150} height={150} smWidth="100" smHeight="100" icons="false"/>
    <ProductItem width={150} height={150} smWidth="100" smHeight="100" icons="false"/>
  </div>;
}
