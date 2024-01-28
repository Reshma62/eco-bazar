import Title from "../Shared/Title";
import { Image } from "@nextui-org/react";
import Cate1 from "/public/assets/HomePage/Category/cate1.png";
const Category = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <section className="py-[60px]">
      {/* Title */}
      <div className="container">
        <Title title={" Shop by Top Categories"} subtilte={"Category"} />
        {/* Caterory */}
        <div className="grid grid-cols-6 gap-6 mt-9">
          {arr.map((c) => (
            <div
              key={c}
              className="text-center group border transition duration-150 hover:border-[#2C742F] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] border-solid rounded-md border-black/30 py-4"
            >
              <Image src={Cate1.src} alt="" />
              <p className="pt-4 font-medium text-lg group-hover:text-primary">
                Fresh Fruit
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
