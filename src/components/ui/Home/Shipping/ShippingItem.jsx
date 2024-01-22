const ShippingItem = ({ Icon, title, subtitle }) => {
  return (
    <div className="group hover:border-primary transition-all  border-b-4 border-solid border-transparent pb-8 w-full flex gap-4 items-center ">
      <div className="rounded-full bg-slate-200 group-hover:bg-primary p-4">
        <Icon className="text-primary group-hover:text-white" size={40} />
      </div>

      <div>
        <h4 className="text-lg font-semibold text-text-color">{title}</h4>
        <p className="text-sm font-normal text-[#999]">{subtitle}</p>
      </div>
    </div>
  );
};

export default ShippingItem;
