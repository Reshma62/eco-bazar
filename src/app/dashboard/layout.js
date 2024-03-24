import AdminSidebar from "@/components/dashboard/Admin/AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex  bg-[#f8f9fa] h-screen overflow-hidden">
      <AdminSidebar />

      <main className="flex-1 ">
        <div className="bg-white px-10 py-6 border-y border-solid border-gray">
          helade
        </div>
        <div className="px-14 mt-10">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
