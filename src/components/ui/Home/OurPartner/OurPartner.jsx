import Image from "next/image";
import Steps from "/public/assets/HomePage/Partner/steps.png";
const OurPartner = () => {
  return (
    <section>
      <div className="container border border-solid border-black/30 py-[60px]">
        <div className="justify-items-center grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 2xl:grid-cols-6">
          <div className="w-full flex justify-center text-center border-r border-solid border-gray ">
            <Image className="grayscale hover:grayscale-0" src={Steps} alt="" />
          </div>
          <div className="w-full flex justify-center text-center border-r border-solid border-gray ">
            <Image className="grayscale hover:grayscale-0" src={Steps} alt="" />
          </div>
          <div className="w-full flex justify-center text-center border-r border-solid border-gray ">
            <Image className="grayscale hover:grayscale-0" src={Steps} alt="" />
          </div>
          <div className="w-full flex justify-center text-center border-r border-solid border-gray ">
            <Image className="grayscale hover:grayscale-0" src={Steps} alt="" />
          </div>
          <div className="w-full flex justify-center text-center border-r border-solid border-gray ">
            <Image className="grayscale hover:grayscale-0" src={Steps} alt="" />
          </div>
          <div className="w-full flex justify-center text-center">
            <Image className="grayscale hover:grayscale-0" src={Steps} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
