import { Image } from "@nextui-org/react";

const SalesProducts = () => {
  return (
    <div className="mt-6 ">
      <h2 className="font-medium text-xl  text-text-color mb-2">
        Sale Products
      </h2>
      <div>
        <div className="flex gap-4 items-center border border-solid border-slate-300 rounded-lg px-2 py-1 shadow-sm transition-all duration-200 group hover:shadow-xl hover:border-primary mb-3 cursor-pointer">
          <Image alt="" src="/assets/Shared/Image.png" />
          <div className="text-sm">
            <p className="text-[#4D4D4D] group-hover:text-primary">
              Red Capsicum
            </p>
            <p>
              <span className="text-text-color font-medium mr-2 inline-block">
                $32.00
              </span>
              <span className="line-through text-[#4D4D4D]">$20.99</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesProducts;
