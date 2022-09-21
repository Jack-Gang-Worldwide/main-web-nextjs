import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GallerySection from "../components/section/gallery-section";
import GamesSection from "../components/section/games-section";
import HeroSection from "../components/section/hero-section";
import MemberSection from "../components/section/member-section";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <GamesSection />
      <MemberSection />
      <GallerySection />
    </div>
  );
};

export default Home;
