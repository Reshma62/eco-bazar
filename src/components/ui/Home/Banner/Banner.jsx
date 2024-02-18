import BannerSlider from "./BannerSlider";
import CategoryItem from "./CategoryItem";
import { CiApple } from "react-icons/ci";

const Banner = () => {
  return (
    <section className="pt-6">
      <div className="md:container">
        <div className="grid grid-cols-12 gap-6">
          <div className="border border-solid border-[#E6E6E6] hidden md:col-span-3 md:block">
            {/* category list */}
            <CategoryItem Icon={CiApple} title={"Fresh Fruit"} />
            <CategoryItem Icon={CiApple} title={"Vegetables"} />
            <CategoryItem Icon={CiApple} title={"River Fish"} />
            <CategoryItem Icon={CiApple} title={"Chicken & Meat"} />
            <CategoryItem Icon={CiApple} title={"Drink & Water"} />
            <CategoryItem Icon={CiApple} title={"Cake & Bread"} />
            <CategoryItem Icon={CiApple} title={"Yogurt & Ice Cream"} />
            <CategoryItem Icon={CiApple} title={"Butter & Cream"} />
            <CategoryItem Icon={CiApple} title={"Cooking"} />
            <CategoryItem Icon={CiApple} title={"View all Category"} />
          </div>
          <div className="md:col-span-9 col-span-full w-full">
            {/* slider */}
            <BannerSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
