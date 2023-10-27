import React from "react";
import Head from "next/head";
import s from "./page.module.scss";
import HeroSection from "./sections/home_page/HeroSection";
import OurProjectsSection from "./sections/home_page/OurProjectsSection";
import ContactUsSection from "./sections/contact_us_page/ContactUsSection";
import BlogSection from "./sections/home_page/BlogSection";
import OurServicesSection from "./sections/home_page/OurServicesSection";
import TechnologiesSection from "./sections/home_page/TechnologiesSection";
import OurTeamSetcion from "./sections/home_page/OurTeamSection";
import OurTeamStatic from "./sections/home_page/OurTeamStatic";

import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";

export async function generateMetadata({}) {
  return { title: "Web development company" };
}

const Home = () => {
  useGoogleAnalytics();

  return (
    <div className={s.home_page}>
      <Head>
        <meta
          name="description"
          content="SoftLion - Your Trusted Partner in IT Services and Consulting. We provide solutions for your business's effective growth, delivering the best technological solutions and consultations."
        />
      </Head>

      <HeroSection />
      <TechnologiesSection />
      <OurServicesSection />
      <OurProjectsSection />
      <BlogSection />
      {/* <OurTeamSetcion /> */}
      <OurTeamStatic />
      <ContactUsSection />
    </div>
  );
};

export default Home;
