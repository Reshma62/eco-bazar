import Searchbar from "./Searchbar";
import Topbar from "./Topbar";

import HomeNav from "./HomeNav";

const Header = () => {
    const userRole = "user";
    const menuItems = [
      { title: "Home", href: "/" },
      { title: "About us", href: "/about-us" },
      { title: "Shop", href: "/shop" },
      { title: "CheckOut", href: "/checkout" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact-us" },
      {
        title: userRole === "user" ? "My Account" : "Dashboard",
        href: userRole === "user" ? "my-account" : "dashboard",
      },
    ];
  return (
    <header className="container">
      <Topbar />
      <Searchbar />
      <HomeNav menuItems={menuItems} />
    </header>
  );
};

export default Header;
