import Banner from "@/components/ui/Home/Banner/Banner";
import Category from "@/components/ui/Home/Category/Category";
import FeaturedProducts from "@/components/ui/Home/FeaturedProducts/FeaturedProducts";
import OurTeam from "@/components/ui/Home/OurTeam/OurTeam";
import Promotions from "@/components/ui/Home/Promotions/Promotions";
import Shipping from "@/components/ui/Home/Shipping/Shipping";
import Video from "@/components/ui/Home/Video/Video";

export default async function Home() {
  return (
    <main className="container">
      <Banner />
      <Shipping />
      <Promotions />
      <Category />
      <FeaturedProducts />
      <Video />
      <OurTeam />
    </main>
  );
}
