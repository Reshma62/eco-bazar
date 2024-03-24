"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaPlusSquare, FaShoppingBag } from "react-icons/fa";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import { TiThList } from "react-icons/ti";
import {
  Accordion,
  AccordionItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const AdminSidebar = () => {
  const [toggle, setToggle] = useState(false);
  const pathName = usePathname();

  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard />,
    },
    {
      title: "Products",
      icon: <FaShoppingBag />,
      subMenu: [
        {
          subItem: "All Product lists",
          path: "/dashboard/all-products",
          icon: <TiThList />,
        },
        {
          subItem: "Add New Product",
          path: "/dashboard/add-products",
          icon: <FaPlusSquare />,
        },
      ],
    },
    {
      title: "Cartegories",
      icon: <FaShoppingBag />,
      subMenu: [
        {
          subItem: "All Category lists",
          path: "/dashboard/all-category",
          icon: <TiThList />,
        },
        {
          subItem: "Add New Category",
          path: "/dashboard/add-category",
          icon: <FaPlusSquare />,
        },
      ],
    },
  ];
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <div
      className={`${
        toggle ? "basis-20 " : "basis-96 px-10"
      }  bg-white shadow-lg pt-8 border-l border-solid border-slate-500 transition-all duration-300 ease-soft-spring relative`}
    >
      <div
        className={` ${toggle ? "justify-center" : "justify-between"} flex `}
      >
        <Link
          href={"/"}
          className={`${
            toggle ? "hidden" : "inline-flex"
          } font-black text-primary text-4xl mb-6 capitalize`}
        >
          Eco - bazar
        </Link>
        {/* <button className={``} onClick={() => setToggle(!toggle)}>
          <HiOutlineBars3BottomLeft size={32} />
        </button> */}
      </div>

      {toggle ? (
        <div>
          {menuItems.map((item) =>
            item.subMenu ? (
              <Dropdown key={item.title}>
                <DropdownTrigger>
                  <DropdownItem>{item.title}</DropdownItem>
                </DropdownTrigger>
                <DropdownMenu aria-label="Menu">
                  <Dropdown
                    onOpenChange={(isOpen) =>
                      isOpen && setOpenSubMenu(item.title)
                    }
                  >
                    <DropdownTrigger>
                      <DropdownItem>
                        {item.icon}
                        {item.title}
                      </DropdownItem>
                    </DropdownTrigger>
                    {openSubMenu === item.title && (
                      <DropdownMenu aria-label="Submenu">
                        {item.subMenu.map((subItem) => (
                          <DropdownItem key={subItem.subItem}>
                            {subItem.icon}
                            {subItem.subItem}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    )}
                  </Dropdown>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <a href="#" key={item.title}>
                {item.title}
              </a>
            )
          )}
        </div>
      ) : (
        <div>
          {menuItems.map((item, index) => {
            const isActive = pathName === item.path;
            const submenuActive =
              item.subMenu &&
              item.subMenu.some((subItem) => pathName === subItem.path);
            console.log(item.path);
            return item.subMenu && item.subMenu.length > 0 ? (
              <Accordion key={index}>
                <AccordionItem
                  startContent={item.icon}
                  classNames={{ base: "" }}
                  title={item.title}
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link
                      className={`${
                        pathName === subItem.path
                          ? "bg-primary/10 text-primary font-semibold"
                          : "hover:bg-slate-300 hover:text-primary"
                      } p-2 ps-5 flex items-center gap-3 rounded-lg text-lg overflow-hidden `}
                      key={subIndex}
                      href={subItem.path}
                    >
                      {subItem.icon} {subItem.subItem}
                    </Link>
                  ))}
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                className={`${
                  isActive || submenuActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "hover:bg-slate-300 hover:text-primary"
                } p-2 ps-5 flex items-center gap-3 rounded-lg text-lg overflow-hidden `}
                key={index}
                href={item.path}
              >
                {item.icon} {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminSidebar;
