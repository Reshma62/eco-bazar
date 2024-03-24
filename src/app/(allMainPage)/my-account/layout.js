import UserSidebar from "@/components/dashboard/UserDashboard/UserSidebar";

const MyAccountLayout = ({ children }) => {
  return (
    <section className="container">
      {" "}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <UserSidebar />
        </div>

        <div className="col-span-9 bg-red-600">{children}</div>
      </div>
    </section>
  );
};

export default MyAccountLayout;
