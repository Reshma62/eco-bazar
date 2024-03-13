import { UiProviders } from "@/Providers/UiProviders";
import Footer from "@/components/shared/footer/Footer";
import MainHeader from "@/components/shared/header/MainHeader/MainHeader";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <MainHeader />
      <section className="flex flex-col justify-center items-center h-[60svh]">
        <div>
          <Image alt="" src="/assets/Shared/404.png" />
        </div>{" "}
        <div className="text-center">
          <h1 className="text-[40px] font-bold text-text-color">
            Oops! page not found
          </h1>
          <p className="text-[#808080] text-base my-6">
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
            Maecenas sagittis tortor at metus mollis
          </p>
          <Link
            href={"/"}
            className="bg-primary text-white px-8 py-4 rounded-full"
          >
            Go back home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
