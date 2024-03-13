import { UiProviders } from "@/Providers/UiProviders";
import Footer from "@/components/shared/footer/Footer";
import MainHeader from "@/components/shared/header/MainHeader/MainHeader";
import { Image } from "@nextui-org/react";

const NotFound = () => {
  return (
    <>
      <MainHeader />
      <section className="flex flex-col justify-center items-center h-[50vh]">
        <div>
          <Image alt="" src="/assets/Shared/404.png" />
        </div>{" "}
        <div>
          <h1>Oops! page not found</h1>
          <p>
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
            Maecenas sagittis tortor at metus mollis
          </p>
          <button>Go back home</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
