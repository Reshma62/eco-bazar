import Footer from "@/components/shared/footer/Footer";
import MainHeader from "@/components/shared/header/MainHeader/MainHeader";
import BreadCrumbs from "@/components/shared/breadCrumbs/BreadCrumbs";

export default function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      <BreadCrumbs />
      {children}
      <Footer />
    </>
  );
}
