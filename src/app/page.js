import Banner from "@/components/ui/Home/Banner/Banner";
import Category from "@/components/ui/Home/Category/Category";
import FeaturedProducts from "@/components/ui/Home/FeaturedProducts/FeaturedProducts";
import Promotions from "@/components/ui/Home/Promotions/Promotions";
import Shipping from "@/components/ui/Home/Shipping/Shipping";
import { userData } from "@/lib/userData/userData";

export default async function Home() {
  const user = await userData();
  console.log("user", user);
  return (
    <main className="container">
      <Banner />
      <Shipping />
      <Promotions />
      <Category />
      <FeaturedProducts />
    </main>
  );
}
