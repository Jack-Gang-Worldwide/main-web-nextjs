import MemberCard from "../ui/card/MemberCard";
import memberData from "../data/member-data";
import { Members, Member } from "../../interfaces/graph-interface";

const MemberSection = ({ members }: Members) => {
  return (
    <section id="members" className="w-full py-32">
      <div className="max-w-[1220px] mx-auto flex flex-col items-center gap-6">
        <h2 className="text-center text-5xl font-bold">
          <span className="text-blue">Meet</span> our members
        </h2>
        <p className="text-center leading-tight">
          Know more about our members and start building relationship with us.
          <br />
          Our members came from many different background. So, it’s time to
          <br />
          join Jack Gang Community!
        </p>
        <div className="flex flex-row justify-center gap-8 flex-wrap w-full">
          {members.map(({ profile, nickname, name, id }: Member) => (
            <MemberCard
              key={id}
              src={profile.url}
              nickname={nickname}
              fullName={name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSection;
