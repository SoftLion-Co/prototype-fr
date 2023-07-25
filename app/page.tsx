"use client";
import React from "react";
import Link from "next/link";
import HeroSection from "./sections/home_page/HeroSection";
import CookiesComponent from "@/components/CookiesComponent";
import SeeMoreButtonComponent from "@/components/SeeMoreButtonComponent";
import OurProjectsSection from "./sections/home_page/OurProjectsSection";
import ContactUsSection from "./sections/contact_us_page/ContactUsSection"
import OurServicesSection from "./sections/home_page/OurServicesSection";
import TechnologiesSection from "./sections/home_page/TechnologiesSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CookiesComponent />
      <OurServicesSection/>
      <ContactUsSection />
      <OurProjectsSection />
      <TechnologiesSection />
    </div>
  );
};
export default Home;
