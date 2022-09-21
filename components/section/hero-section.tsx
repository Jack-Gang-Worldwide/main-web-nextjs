import Link from "next/link";
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="hero-section min-h-[1024px] w-full h-full flex flex-col items-center"
    >
      <div className="max-w-[1220px] min-h-full h-full m-auto w-full flex flex-row justify-between items-center">
        <div className="flex flex-col gap-6 justify-center">
          <h1 className="inline-block text-white font-bold text-[56px] leading-tight">
            Feel an exiciting <br />
            adventure with <br />
            Jack Gang!
          </h1>
          <p className="text-white text-lg leading-7">
            Jack Gang is a discord server for gamer whose <br />
            enjoy playing any type of games. We are welcoming for <br />
            those who’s enjoy playing some game.
          </p>
          <Link href="">
            <button
              className={
                " border-red border-2 mr-auto leading-tight text-md font-bold py-4 px-8 text-white rounded-md "
              }
            >
              Learn More
            </button>
          </Link>
        </div>
        <img src="/assets/hero img.png" alt="hero image" />
      </div>
    </section>
  );
};

export default HeroSection;
