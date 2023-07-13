import Link from "next/link";
import AppealingSection from "./sections/article_page/AppealingSection";
import { FooterComp } from "@/components/FooterComponent";
import HeroSection from "../app/sections/home_page/HeroSection";

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <Link href="/blogs">
        <h2>Blog</h2>
      </Link>
      <Link href="/projects">
        <h2>Projects</h2>
      </Link>
      <Link href="/services">
        <h2>Services</h2>
      </Link>
      <AppealingSection />
      <HeroSection />
      {/* <FooterComp /> */}
    </div>
  );
};

export default Home;
