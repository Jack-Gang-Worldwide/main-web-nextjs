import GamesSlider from "../ui/slider/GamesSlider";

const GamesSection = () => {
  return (
    <section id="games" className="w-full py-24">
      <div className="max-w-[1220px] mx-auto">
        <h2 className="font-bold text-5xl leading-tight">
          <span className="text-red">Play</span> <br />
          games with us
        </h2>
        <p className="text-lg leading-tight mt-6">
          If you’re looking for a community to play games with, Jack Gang is the{" "}
          <br />
          place for you. With our community, you’ll be able to build relation
          with <br />
          gamer community based in Bali.
        </p>
        <GamesSlider />
      </div>
    </section>
  );
};

export default GamesSection;
