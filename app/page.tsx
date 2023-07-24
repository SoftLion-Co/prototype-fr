import Link from "next/link";
import HeroSection from "./sections/home_page/HeroSection";
import CookiesComponent from "@/components/CookiesComponent";
import SeeMoreButtonComponent from "@/components/SeeMoreButtonComponent";
import OurProjectsSection from "./sections/home_page/OurProjectsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CookiesComponent />
      <SeeMoreButtonComponent path="blogs"/>
      <OurProjectsSection />
    </div >
  );
};

export default Home;
