import React from "react";
import s from "./page.module.scss";
import HeroSection from "./sections/home_page/HeroSection";
import TechnologiesSection from "./sections/home_page/TechnologiesSection";
import OurServicesSection from "./sections/home_page/OurServicesSection";
import OurProjectsSection from "./sections/home_page/OurProjectsSection";
import BlogSection from "./sections/home_page/BlogSection";
import OurTeamStatic from "./sections/home_page/OurTeamStatic";
import ContactUsSection from "./sections/contact_us_page/ContactUsSection";

import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";

export async function generateMetadata({}) {
  return { title: "Web development company" };
}

const Home = () => {
  useGoogleAnalytics();

  return (
    <React.Fragment>
      <HeroSection />
      <TechnologiesSection />
      <OurServicesSection />
      <OurProjectsSection />
      <BlogSection />
      {/* <OurTeamStatic /> */}
      <ContactUsSection className={s.main__contactUs} />
    </React.Fragment>
  );
};

export default Home;
