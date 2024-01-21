const CategoryItem = ({ title, Icon }) => {
  return (
    <li className="flex gap-3 items-center py-4 px-5 border-b border-solid border-[#ddd]">
      <Icon size={24} />
      {title}
    </li>
  );
};

export default CategoryItem;
