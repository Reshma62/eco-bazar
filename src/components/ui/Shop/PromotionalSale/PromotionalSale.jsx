import Image from "next/image";
import Link from "next/link";

const PromotionalSale = () => {
  return (
    <div className="bg-[#4D4D4D]">
      <div>
        {" "}
        <h2>
          <span>79% </span>Discount
        </h2>
        <p>on your first order</p>
        <Link href={"/shop"}>Shop Now</Link>
      </div>
      <Image
        src={"/assets/Shared/Bannar.png"}
        alt=""
        width={100}
        height={100}
        className="w-96"
      />
    </div>
  );
};

export default PromotionalSale;
