"use client";
import s from "./page.module.scss";
import React from "react";
import HeroSection from "./sections/home_page/HeroSection";
// import CookiesComponent from "@/components/CookiesComponent";
import OurProjectsSection from "./sections/home_page/OurProjectsSection";
import ContactUsSection from "./sections/contact_us_page/ContactUsSection";
import BlogSection from "./sections/home_page/BlogSection";
import OurServicesSection from "./sections/home_page/OurServicesSection";
import TechnologiesSection from "./sections/home_page/TechnologiesSection";

const Home = () => {
  return (
    <div className={s.home_page}>
      <HeroSection />
      {/* <CookiesComponent /> */}
      <TechnologiesSection />
      <OurServicesSection />
      <OurProjectsSection />
      <BlogSection />
      <ContactUsSection />
    </div>
  );
};
export default Home;
