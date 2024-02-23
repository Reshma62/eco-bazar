import ProductCard from "@/components/ui/Shop/ProductCard/ProductCard";
import ShopFilter from "@/components/ui/Shop/ShopFilter/ShopFilter";

const ShopPage = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="container mt-8">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <ShopFilter />
        </div>
        <div className="col-span-9">
          <div className="flex justify-between mb-5">
            <div className="flex items-center gap-3">
              <p className="text-[#808080] capitalize text-sm">sort by:</p>
              <select
                name=""
                id=""
                className="border border-solid border-slate-200 outline-0 px-2"
              >
                <option value="latest">Latest</option>
                <option value="lowtohigh">Low to High</option>
                <option value="hightolow">High to low</option>
              </select>
            </div>
            <p>
              <span className="font-blod text-primary">52</span> Results Found
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {arr.map((i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
