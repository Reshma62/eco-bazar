"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaPlusSquare,
  FaShoppingBag,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { TiThList } from "react-icons/ti";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

const AdminSidebar = () => {
  const [toggle, setToggle] = useState(false);
  const pathName = usePathname();

  return (
    // <div
    //   className={`${
    //     toggle ? "basis-20 " : "basis-96 px-10"
    //   }  bg-white shadow-lg pt-8 border-l border-solid border-slate-500 transition-all duration-300 ease-soft-spring relative`}
    // >
    //   <div
    //     className={` ${toggle ? "justify-center" : "justify-between"} flex `}
    //   >
    //     <Link
    //       href={"/"}
    //       className={`${
    //         toggle ? "hidden" : "inline-flex"
    //       } font-black text-primary text-4xl mb-6 capitalize`}
    //     >
    //       Eco - bazar
    //     </Link>
    //     <button className={``} onClick={() => setToggle(!toggle)}>
    //       <HiOutlineBars3BottomLeft size={32} />
    //     </button>
    //   </div>

    //   {toggle ? (
    //     <div>
    //       {menuItems.map((item) =>
    //         item.subMenu ? (
    //           <Dropdown key={item.title}>
    //             <DropdownTrigger>
    //               <DropdownItem>{item.title}</DropdownItem>
    //             </DropdownTrigger>
    //             <DropdownMenu aria-label="Menu">
    //               <Dropdown
    //                 onOpenChange={(isOpen) =>
    //                   isOpen && setOpenSubMenu(item.title)
    //                 }
    //               >
    //                 <DropdownTrigger>
    //                   <DropdownItem>
    //                     {item.icon}
    //                     {item.title}
    //                   </DropdownItem>
    //                 </DropdownTrigger>
    //                 {openSubMenu === item.title && (
    //                   <DropdownMenu aria-label="Submenu">
    //                     {item.subMenu.map((subItem) => (
    //                       <DropdownItem key={subItem.subItem}>
    //                         {subItem.icon}
    //                         {subItem.subItem}
    //                       </DropdownItem>
    //                     ))}
    //                   </DropdownMenu>
    //                 )}
    //               </Dropdown>
    //             </DropdownMenu>
    //           </Dropdown>
    //         ) : (
    //           <a href="#" key={item.title}>
    //             {item.title}
    //           </a>
    //         )
    //       )}
    //     </div>
    //   ) : (
    //     <div>
    //       {menuItems.map((item, index) => {
    //         const isActive = pathName === item.path;
    //         const submenuActive =
    //           item.subMenu &&
    //           item.subMenu.some((subItem) => pathName === subItem.path);
    //         console.log(item.path);
    //         return item.subMenu && item.subMenu.length > 0 ? (
    //           <Accordion key={index}>
    //             <AccordionItem
    //               startContent={item.icon}
    //               classNames={{ base: "" }}
    //               title={item.title}
    //             >
    //               {item.subMenu.map((subItem, subIndex) => (
    //                 <Link
    //                   className={`${
    //                     pathName === subItem.path
    //                       ? "bg-primary/10 text-primary font-semibold"
    //                       : "hover:bg-slate-300 hover:text-primary"
    //                   } p-2 ps-5 flex items-center gap-3 rounded-lg text-lg overflow-hidden `}
    //                   key={subIndex}
    //                   href={subItem.path}
    //                 >
    //                   {subItem.icon} {subItem.subItem}
    //                 </Link>
    //               ))}
    //             </AccordionItem>
    //           </Accordion>
    //         ) : (
    //           <Link
    //             className={`${
    //               isActive || submenuActive
    //                 ? "bg-primary/10 text-primary font-semibold"
    //                 : "hover:bg-slate-300 hover:text-primary"
    //             } p-2 ps-5 flex items-center gap-3 rounded-lg text-lg overflow-hidden `}
    //             key={index}
    //             href={item.path}
    //           >
    //             {item.icon} {item.title}
    //           </Link>
    //         );
    //       })}
    //     </div>
    //   )}
    // </div>
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar collapsed={toggle} transitionDuration={400}>
        <Menu iconShape="circle">
          {toggle ? (
            <MenuItem
              icon={<FaAngleDoubleRight />}
              onClick={() => setToggle(!toggle)}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FaAngleDoubleLeft />}
              onClick={() => setToggle(!toggle)}
            >
              <div
                style={{
                  padding: "9px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 15,
                  letterSpacing: "1px",
                }}
              >
                <h2>Eco-Bazar</h2>
              </div>
            </MenuItem>
          )}
        </Menu>
        <Menu
          menuItemStyles={{
            button: {
              "&.ps-active": {
                backgroundColor: "rgba(0, 178, 7, 1)", // Change to your desired active background color
                color: "white", // Change to your desired active text color
                opacity: "10",
              },

              "&.ps-menu-button:hover": {
                backgroundColor: "rgba(0, 178, 7, .2)", // Change to your desired active hover background color
                color: "rgba(0, 178, 7, 1)", // Change to your desired active hover text color
              },
            },
          }}
        >
          <MenuItem
            icon={<MdDashboard />}
            component={<Link href="/dashboard" />}
            active={pathName === "/dashboard"}
          >
            Dashboard
          </MenuItem>

          <SubMenu icon={<TbCategoryPlus />} defaultOpen label="Cartegories">
            <MenuItem
              icon={<FaShoppingBag />}
              active={pathName === "/dashboard/all-category"}
              component={<Link href="/dashboard/all-category" />}
            >
              All Category
            </MenuItem>
            <MenuItem
              active={pathName === "/dashboard/add-category"}
              component={<Link href="/dashboard/add-category" />}
            >
              {" "}
              Add Category
            </MenuItem>
          </SubMenu>

          <SubMenu icon={<FaShoppingBag />} label="Products">
            <MenuItem
              icon={<TiThList />}
              component={<Link href="/dashboard/all-products" />}
              active={pathName === "/dashboard/all-products"}
            >
              {" "}
              All products
            </MenuItem>
            <MenuItem
              active={pathName === "/dashboard/add-products"}
              icon={<FaPlusSquare />}
              component={<Link href="/dashboard/add-products" />}
            >
              Add product
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default AdminSidebar;
