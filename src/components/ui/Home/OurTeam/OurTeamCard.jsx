import Image from "next/image";

const OurTeamCard = ({ img, name, position }) => {
  return (
    <div className="bg-white border-black/30 border ">
      <Image className="w-full" src={img} alt="" />
      <div className="p-5 pt-4">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-[#808080] text-sm">{position}</p>
      </div>
    </div>
  );
};

export default OurTeamCard;
