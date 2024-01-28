import { Link } from "@nextui-org/react";

const FooterNavItem = ({ item, href }) => {
  return (
    <li className=" font-normal ">
      <Link className="text-sm text-[#666]" href={href}>
        {item}
      </Link>
    </li>
  );
};

export default FooterNavItem;
