import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";

export default function LandingLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
