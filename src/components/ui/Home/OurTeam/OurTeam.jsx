import Title from "../Shared/Title";
import OurTeamCard from "./OurTeamCard";
import team1 from "/public/assets/Team/team1.png";
import team2 from "/public/assets/Team/team2.png";
import team3 from "/public/assets/Team/team3.png";
import team4 from "/public/assets/Team/team4.png";
const OurTeam = () => {
  return (
    <section className="mb-[60px]">
      <Title title={"Our Professional Members"} subtilte={"Team"} />
      {/* team member card */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 pt-10 ">
        <OurTeamCard
          img={team1}
          name={"Jenny Wilson"}
          position={"Ceo & Founder"}
        />
        <OurTeamCard img={team2} name={"Jane Cooper"} position={"Worker"} />
        <OurTeamCard
          img={team3}
          name={"Cody Fisher"}
          position={"Security Guard"}
        />
        <OurTeamCard
          img={team4}
          name={"Robert Fox"}
          position={"Senior Farmer Manager"}
        />
      </div>
    </section>
  );
};

export default OurTeam;
