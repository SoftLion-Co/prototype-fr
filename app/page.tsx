import Link from "next/link";
import HeroSection from "./sections/home_page/HeroSection";
import CookiesComponent from "@/components/CookiesComponent";
import SeeMoreButtonComponent from "@/components/SeeMoreButtonComponent";
import OurProjectsSection from "./sections/home_page/OurProjectsSection";
import ContactUsSection from "./sections/contact_us_page/ContactUsSection"
import RequestSection from "./sections/project_page/RequestSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CookiesComponent />
      <SeeMoreButtonComponent path="blogs"/>
      <OurProjectsSection />
      <ContactUsSection />
      <RequestSection/>
    </div>
  );
};

export default Home;
