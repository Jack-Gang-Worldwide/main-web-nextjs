import Link from "next/link";
import { useEffect, useState } from "react";
import { zonedTimeToUtc, format, utcToZonedTime } from "date-fns-tz";
import footerData from "../../data/footer-data";
const Footer = () => {
  const [time, setTime] = useState("");
  setInterval(
    () =>
      setTime(
        format(utcToZonedTime(new Date(), "Asia/Makassar"), "HH:mm", {
          timeZone: "Asia/Makassar",
        })
      ),
    1000
  );
  useEffect(() => {
    console.log(time);
  });
  return (
    <footer className="w-full h-[21rem] bg-black">
      <div className="max-w-[1220px] mx-auto pt-10 flex flex-col justify-between h-full">
        <div className="flex flex-row justify-between">
          <div className="left flex flex-col gap-4">
            <div className="flex flex-row items-center gap-8">
              <img src="/logo.png" alt="logo jackgang" />
              <h3 className="font-bold text-[2rem] footer-text">
                Jack Gang
                <br />
                Worldwide
              </h3>
            </div>
            <p className="text-white leading-[26px]">
              We are welcoming new members
              <br />
              to join and build our community better
              <br />
              and bigger to reach the worldwide{" "}
            </p>
          </div>
          <div className="right flex flex-col gap-8">
            <h2 className="font-bold text-white text-5xl">{time}</h2>
            <div>
              {footerData.map(({ name, route }, key) => (
                <Link href={route} key={key}>
                  <p
                    className="text-white text-lg hover:cursor-pointer"
                    key={key}
                  >
                    {name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="text-white text-base text-center pb-8">
          Copyright © Kuroyamii. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
