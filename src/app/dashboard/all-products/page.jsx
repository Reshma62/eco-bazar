import AllProducts from "@/components/dashboard/Admin/Products/AllProducts";
import Link from "next/link";
const AllProductsPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl text-[#495057] font-semibold ">All products</h1>
        <Link
          className="bg-primary text-white px-6 py-3 rounded-md"
          href="/dashboard/add-products"
          color="white"
        >
          Add New Product
        </Link>{" "}
      </div>
      <AllProducts />
    </div>
  );
};

export default AllProductsPage;
