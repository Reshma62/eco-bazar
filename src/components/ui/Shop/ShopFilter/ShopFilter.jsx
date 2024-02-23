import Image from "next/image";
import PriceRangeSlider from "../PriceRangeSlider/PriceRangeSlider";
import AllCategoriesFilter from "../AllCategoriesFilter/AllCategoriesFilter";
import PopularTag from "../PopularTag/PopularTag";
import PromotionalSale from "../PromotionalSale/PromotionalSale";
import SalesProducts from "../SalesProducts/SalesProducts";

const ShopFilter = () => {
  return (
    <div>
      <button className="bg-primary text-white rounded-full px-8 py-4 flex gap-2 items-center">
        Filter{" "}
        <Image
          width={24}
          height={24}
          alt=""
          src={"/assets/Shared/Filter.svg"}
        />
      </button>
      <AllCategoriesFilter />
      <PriceRangeSlider />
      <PopularTag />
      {/* <PromotionalSale /> */}
      <SalesProducts />
    </div>
  );
};

export default ShopFilter;
