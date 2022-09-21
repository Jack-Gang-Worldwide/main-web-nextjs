import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import queries from "../components/api/query";
import GallerySection from "../components/section/gallery-section";
import GamesSection from "../components/section/games-section";
import HeroSection from "../components/section/hero-section";
import MemberSection from "../components/section/member-section";
import { Gallery, Member } from "../interfaces/graph-interface";
import styles from "../styles/Home.module.css";

interface Props {
  members: Member[];
  galleries: Gallery[];
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const members = await (await queries.getAllMember()).data.data.members;
  const galleries = await (await queries.getAllImages()).data.data.galleries;
  return {
    props: { members, galleries },
  };
};

const Home = ({ members, galleries }: Props) => {
  return (
    <div>
      <HeroSection />
      <GamesSection />
      <MemberSection members={members} />
      <GallerySection galleries={galleries} />
    </div>
  );
};

export default Home;
