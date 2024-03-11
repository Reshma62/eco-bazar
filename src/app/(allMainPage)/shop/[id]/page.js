// Import your custom right icon component

import InformationTabs from "@/components/ui/ProductDetails/InformationTabs";
import ProductDetails from "@/components/ui/ProductDetails/ProductDetails";
import RelatedProducts from "@/components/ui/ProductDetails/RelatedProducts";

const ProductDetailsPage = () => {
  return (
    <section className=" container mt-20">
      <ProductDetails />
      <div className="">
        <InformationTabs />
      </div>
      <div className="mt-10">
        <h2 className="font-semibold text-[32px] mb-3 text-text-color text-center">
          Related Products
        </h2>
        <RelatedProducts />
      </div>
    </section>
  );
};

export default ProductDetailsPage;
