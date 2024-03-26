import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar.tsx/NavBar";
import NumberIncrement from "@/components/NumberIncrement";
import NumbersIncrement from "@/components/NumbersIncrement";
import CrmForm from "@/components/crmForm/CromForm";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

import Carousel from "../components/Carousel";

const HomePage = () => {
  const images = ["/BA.png", "/BA2.png", "/i3.png", "/i4.png"];

  return (
    <div className={inter.className}>
      <NavBar />
      <div className="positionRelative">
        <Carousel images={images} />
        <NumbersIncrement />
        <CrmForm />
      </div>
    </div>
  );
};

export default HomePage;
