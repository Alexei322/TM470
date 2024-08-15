import ProductItem from "./ProductItem";

export default function ProductGrid({calendarTimeValue}) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 justify-items-center items-center">
        <ProductItem
          width={150}
          height={150}
          icons="true"
          name="Adult tour"
          price={18.95}
          flexDirectionOuter="col"
          flexDirectionInner="row"
          calendarTimeValue={calendarTimeValue}
        />
        <ProductItem
          width={150}
          height={150}
          icons="true"
          name="Child tour"
          price={14.95}
          flexDirectionOuter="col"
          flexDirectionInner="row"
          calendarTimeValue={calendarTimeValue}
        />
        <ProductItem
          width={150}
          height={150}
          icons="true"
          name="Family tour"
          price={50}
          flexDirectionOuter="col"
          flexDirectionInner="row"
          calendarTimeValue={calendarTimeValue}
        />
      </div>
      <div className="flex gap-10 justify-center pt-10">
        <ProductItem
          width={150}
          height={150}
          icons="true"
          name="Adult boat tour"
          price={21}
          flexDirectionOuter="col"
          flexDirectionInner="row"
          calendarTimeValue={calendarTimeValue}
        />
        <ProductItem
          width={150}
          height={150}
          icons="true"
          name="Child boat tour"
          price={18}
          flexDirectionOuter="col"
          flexDirectionInner="row"
          calendarTimeValue={calendarTimeValue}
        />
        <ProductItem
          width={150}
          height={150}
          icons="true"
          name="Private cruise"
          price={252}
          flexDirectionOuter="col"
          flexDirectionInner="row"
          calendarTimeValue={calendarTimeValue}
        />
      </div>
    </div>
  );
}
