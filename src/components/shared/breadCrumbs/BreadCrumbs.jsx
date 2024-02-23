import { IoMdHome } from "react-icons/io";
import bg from "/public/assets/Shared/Breadcrumbs.png";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

const BreadCrumbs = () => {
  return (
    <section
      style={{
        background: `url(${bg.src})`,
      }}
      className="bg-no-repeat bg-cover py-12"
    >
      <div className="container">
        <div className="flex items-center gap-2  font-normal">
          <IoMdHome size={24} className="text-[#999999]" />
          <FaAngleRight className="text-[#999999]" />
          <Link href={"/category"} className="text-[#999999] capitalize">
            Categories
          </Link>
          <FaAngleRight className="text-[#999999]" />
          <Link
            href={"/categroy/vegetable"}
            className="text-primary capitalize"
          >
            vegetables
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbs;
