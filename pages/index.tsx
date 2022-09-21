import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GamesSection from "../components/section/games-section";
import HeroSection from "../components/section/hero-section";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <GamesSection />
    </div>
  );
};

export default Home;
