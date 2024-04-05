import AdminSidebar from "@/components/dashboard/Admin/AdminSidebar";
import { FaSearch } from "react-icons/fa";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex bg-[#f8f9fa] h-screen overflow-hidden">
      <AdminSidebar />

      <main className="flex-1 ">
        <div className="bg-white px-10 py-3 border-y border-solid border-slate-50">
          <div className="flex justify-between">
            <div className="relative w-3/12">
              <input
                type="text"
                placeholder="Search Product"
                className="py-3 px-5 rounded-md border-solid border-slate-100 bg-slate-200 w-full outline-1 outline-primary focus:border-primary"
              />
              <div className="absolute -translate-y-1/2 top-1/2 flex justify-center items-center right-0 bg-primary text-white px-4 h-full rounded-r-lg">
                <FaSearch />
              </div>
            </div>
            <div>
              <button>text</button>
            </div>
          </div>
        </div>
        <div className="px-14 mt-10">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
