"use client";
import React from "react";
import Link from "next/link";
import HeroSection from "./sections/home_page/HeroSection";
import EcommerceSection from "./sections/home_page/EcommerceSection";
import CustomAppsSection from "./sections/home_page/CustomAppsSection";
import WorkWithCustomersSection from "./sections/home_page/WorkWithCustomersSection";
import CookiesComponent from "@/components/CookiesComponent";
import OurProjectsSection from "./sections/home_page/OurProjectsSection";
import ContactUsSection from "./sections/contact_us_page/ContactUsSection";
import OurServicesSection from "./sections/home_page/OurServicesSection";
import TechnologiesSection from "./sections/home_page/TechnologiesSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CookiesComponent />
      <TechnologiesSection />
      <OurServicesSection />
      <OurProjectsSection />
      <ContactUsSection />
    </div>
  );
};
export default Home;
