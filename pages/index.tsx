import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import queries from "../components/api/query";
import GallerySection from "../components/section/gallery-section";
import GamesSection from "../components/section/games-section";
import HeroSection from "../components/section/hero-section";
import MemberSection from "../components/section/member-section";
import { Member } from "../interfaces/graph-interface";
import styles from "../styles/Home.module.css";

interface Props {
  members: Member[];
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const members = await (await queries.getAllMember()).data.data;
  console.log(members);
  return {
    props: members,
  };
};

const Home = ({ members }: Props) => {
  console.log(members);
  return (
    <div>
      <HeroSection />
      <GamesSection />
      <MemberSection members={members} />
      <GallerySection />
    </div>
  );
};

export default Home;
