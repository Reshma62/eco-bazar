import Title from "../Shared/Title";
import { Image } from "@nextui-org/react";
import summerSale from "/public/assets/HomePage/Products/summerSale.svg";
import banner from "/public/assets/HomePage/Products/banner2.svg";
import ProductCard from "../../Shop/ProductCard/ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCardSmall from "./ProductCardSmall";
const FeaturedProducts = () => {
  return (
    <section className="pb-[60px]">
      <div className="container">
        <Title title={"Our Featured Products"} subtilte={"Products"} />
        {/* products */}
        <div className="pt-8">
          {/* top product */}
          <div className="grid  grid-cols-1 lg:grid-cols-5 md:grid-col-2 gap-5">
            <div className="relative">
              <Image src={summerSale.src} alt="" />
              <div className="absolute top-6 w-full left-0 right-0 z-50 text-center">
                <p className="text-text-color uppercase text-xs font-medium mb-2">
                  Summer Sale
                </p>
                <h2 className="font-semibold text-3xl text-primary mb-4">
                  75% off
                </h2>
                <div className="flex justify-center">
                  <button className="text-primary text-sm bg-white py-[14px] px-8 rounded-full font-semibold flex items-center justify-center gap-3">
                    Shop now <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
            {/* product card */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          {/* best hot deal */}
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-col-2 gap-5 mt-6">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-text-color">Hot Deals</h2>
              <ProductCardSmall />
              <ProductCardSmall />
              <ProductCardSmall />
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-text-color">
                Best Seller
              </h2>
              <ProductCardSmall />
              <ProductCardSmall />
              <ProductCardSmall />
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-text-color">Top Rated</h2>
              <ProductCardSmall />
              <ProductCardSmall />
              <ProductCardSmall />
            </div>

            {/* Banner */}
            <div className="relative">
              <Image src={banner.src} alt="" />
              <div className="absolute top-6 w-full left-0 right-0 z-50 text-center">
                <p className="text-text-color uppercase text-xs font-medium mb-2">
                  Summer Sale
                </p>
                <h2 className="font-semibold text-3xl text-primary mb-4">
                  75% off
                </h2>
                <div className="flex justify-center">
                  <button className="text-primary text-sm bg-white py-[14px] px-8 rounded-full font-semibold flex items-center justify-center gap-3">
                    Shop now <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
