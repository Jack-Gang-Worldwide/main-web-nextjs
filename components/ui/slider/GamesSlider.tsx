import { useEffect } from "react";
import Slider from "react-slick";
import gamesData from "../../data/games-data";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { IconContext } from "react-icons/lib";

const arrowSize = "2rem";

const ArrowNext = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <IconContext.Provider
      value={{
        size: "3rem",
        color: "black",
        style: { ...style, height: "3rem", width: "3rem" },
      }}
    >
      <MdNavigateNext onClick={onClick} className={className} />
    </IconContext.Provider>
  );
};
const ArrowPrev = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <IconContext.Provider
      value={{
        size: "3rem",
        color: "black",
        style: { ...style, height: "3rem", width: "3rem" },
      }}
    >
      <MdNavigateBefore onClick={onClick} className={className} />
    </IconContext.Provider>
  );
};

const GamesSlider = () => {
  const options = {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    pauseOnHover: true,
  };
  return (
    <div className="">
      <Slider {...options}>
        {gamesData.map(({ name, href }, key) => (
          <div
            className="w-[200px] h-[200px] flex flex-col items-center justify-center"
            key={key}
          >
            <img
              key={key}
              src={href}
              alt={name}
              className="w-full h-full object-contain p-8"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GamesSlider;
