import DashboardCard from "@/components/dashboard/Admin/DashboardHome/DashboardCard";
// import DashbordHome from "@/components/dashboard/Admin/DashboardHome/DashbordHome";
import { FaDollarSign } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FaShoppingBasket } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl text-[#495057] font-semibold mb-2">
          Dashboard
        </h2>
        <p className="text-slate-700 font-medium text-lg mb-4">
          Whole data about your business here
        </p>
      </div>
      <div className="mb-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        <DashboardCard
          Icon={FaDollarSign}
          title={"Revenue"}
          subTitle={"$13,456.5"}
        />
        <DashboardCard
          Icon={MdLocalShipping}
          title={"Orders"}
          subTitle={"$13,456.5"}
        />
        <DashboardCard
          Icon={BiCategoryAlt}
          title={"Products"}
          subTitle={"$13,456.5"}
        />
        <DashboardCard
          Icon={FaShoppingBasket}
          title={"Monthly Earning"}
          subTitle={"$13,456.5"}
        />
      </div>
      {/* <DashbordHome /> */}
    </div>
  );
};

export default Dashboard;
