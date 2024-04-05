const DashboardCard = ({ Icon, title, subTitle }) => {
  return (
    <div className="flex bg-white shadow-xl rounded-lg px-6 py-8 gap-4 items-center">
      <div className="bg-primary/10 p-4 rounded-full">
        <Icon className="text-primary text-3xl" />
      </div>
      <div>
        <h2 className="text-lg">{title}</h2>
        <p className="text-2xl font-semibold">{subTitle}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
