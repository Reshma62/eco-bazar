import Banner from "@/components/ui/Home/Banner/Banner";
import Promotions from "@/components/ui/Home/Promotions/Promotions";
import Shipping from "@/components/ui/Home/Shipping/Shipping";

export default function Home() {
  return (
    <main className="container">
      <Banner />
      <Shipping />
      <Promotions />
    </main>
  );
}
