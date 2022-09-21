import MemberCard from "../ui/card/MemberCard";
import memberData from "../data/member-data";

const MemberSection = () => {
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
          {memberData.map(({ src, nickname, fullName }) => (
            <MemberCard
              src="https://via.placeholder.com/150"
              nickname="Kuroyamii"
              fullName="Gery Sastrawan"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSection;
