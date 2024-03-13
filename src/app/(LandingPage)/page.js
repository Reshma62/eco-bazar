import Banner from "@/components/ui/Home/Banner/Banner";
import Category from "@/components/ui/Home/Category/Category";
import FeaturedProducts from "@/components/ui/Home/FeaturedProducts/FeaturedProducts";
import OurPartner from "@/components/ui/Home/OurPartner/OurPartner";
import OurTeam from "@/components/ui/Home/OurTeam/OurTeam";
import Promotions from "@/components/ui/Home/Promotions/Promotions";
import Shipping from "@/components/ui/Home/Shipping/Shipping";
import Testimonials from "@/components/ui/Home/Testimonials/Testimonials";
import Video from "@/components/ui/Home/Video/Video";


const LandingPage = () => {
  return (
    <main className="container">
      <Banner />
      <Shipping />
      <Promotions />
      <Category />
      <FeaturedProducts />
      <Video />
      <OurTeam />
      <Testimonials />
      <OurPartner />
    </main>
  );
};

export default LandingPage;
