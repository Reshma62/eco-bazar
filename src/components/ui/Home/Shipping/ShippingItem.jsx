const ShippingItem = ({ Icon, title, subtitle }) => {
  return (
    <div className="  w-full flex gap-4 items-center ">
      <div className="rounded-full bg-slate-200 p-4">
        <Icon className="text-primary" size={40} />
      </div>

      <div>
        <h4 className="text-lg font-semibold text-text-color">{title}</h4>
        <p className="text-sm font-normal text-[#999]">{subtitle}</p>
      </div>
    </div>
  );
};

export default ShippingItem;
