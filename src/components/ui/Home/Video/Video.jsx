import bg from "/public/assets/HomePage/Video/videoBg.png";
import { MdOutlinePlayCircle } from "react-icons/md";

const Video = () => {
  return (
    <section
      style={{ background: `url(${bg.src})` }}
      className="bg-cover bg-no-repeat bg-center py-[80px] flex justify-center items-center text-white mb-[60px]"
    >
      <div>
        <h2 className="text-[36px] font-semibold max-w-[495px] w-full mx-auto text-center mb-7">
          We’re the Best Organic Farm in the World
        </h2>
        <MdOutlinePlayCircle size={80} className="mx-auto" />
      </div>
    </section>
  );
};

export default Video;
