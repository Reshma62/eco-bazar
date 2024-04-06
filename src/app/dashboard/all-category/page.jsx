import AllCategory from "@/components/dashboard/Admin/Category/AllCategory";
import Link from "next/link";
const AllCategoryPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl text-[#495057] font-semibold ">All Category</h1>
        <Link
          className="bg-primary text-white px-6 py-3 rounded-md"
          href="/dashboard/add-products"
          color="white"
        >
          Add New Category
        </Link>{" "}
      </div>
      <AllCategory />
    </div>
  );
};

export default AllCategoryPage;
