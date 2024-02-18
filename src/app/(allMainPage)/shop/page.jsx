import PriceRangeSlider from "@/components/ui/Shop/PriceRangeSlider/PriceRangeSlider";

const ShopPage = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <PriceRangeSlider />
        </div>
        <div className="col-span-9">product cartd</div>
      </div>
    </div>
  );
};

export default ShopPage;
