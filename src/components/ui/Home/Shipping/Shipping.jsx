import ShippingItem from "./ShippingItem";
import { TbTruckDelivery } from "react-icons/tb";
import { CiHeadphones } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TfiPackage } from "react-icons/tfi";
const Shipping = () => {
  return (
    <div className="flex justify-between gap-6 border-b border-solid border-[#999] pt-8 mb-14">
      <ShippingItem
        Icon={TbTruckDelivery}
        title={"Free Shipping"}
        subtitle={"Free shipping with discount"}
      />
      <ShippingItem
        Icon={CiHeadphones}
        title={"Great Support 24/7"}
        subtitle={"Instant access to Contact"}
      />
      <ShippingItem
        Icon={HiOutlineShoppingBag}
        title={"100% Sucure Payment"}
        subtitle={"We ensure your money is save"}
      />
      <ShippingItem
        Icon={TfiPackage}
        title={"Money-Back Guarantee"}
        subtitle={"30 days money-back"}
      />
    </div>
  );
};

export default Shipping;
