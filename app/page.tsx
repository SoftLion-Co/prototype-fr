import Link from "next/link";
import HeroSection from "./sections/home_page/HeroSection";
import CookiesComponent from "@/components/CookiesComponent";
import SeeMoreButtonComponent from "@/components/SeeMoreButtonComponent";
import OurProjectsSection from "./sections/home_page/OurProjectsSection";
import TechnologiesSection from "./sections/home_page/TechnologiesSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CookiesComponent />
      <SeeMoreButtonComponent path="blogs" />
      <OurProjectsSection />
      <TechnologiesSection />
    </div>
  );
};

export default Home;
