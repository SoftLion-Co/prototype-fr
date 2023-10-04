"use client";

import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import s from "./page.module.scss";
import HeroSection from "./sections/home_page/HeroSection";
// import CookiesComponent from "@/components/CookiesComponent";
import OurProjectsSection from "./sections/home_page/OurProjectsSection";
import ContactUsSection from "./sections/contact_us_page/ContactUsSection";
import BlogSection from "./sections/home_page/BlogSection";
import OurServicesSection from "./sections/home_page/OurServicesSection";
import TechnologiesSection from "./sections/home_page/TechnologiesSection";
import OurTeamSetcion from "./sections/home_page/OurTeamSection";

const Home = () => {
  useEffect(() => {
    // Google tag (gtag.js)
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-YPC94QJXCN";

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-YPC94QJXCN');
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);
  }, []);

  return (
    <div className={s.home_page}>
      <Helmet key={window.location.pathname}>
        <title>Web development company</title>
      </Helmet>

      <HeroSection />
      {/* <CookiesComponent /> */}
      <TechnologiesSection />
      <OurServicesSection />
      <OurProjectsSection />
      <BlogSection />
      <OurTeamSetcion />
      <ContactUsSection />
    </div>
  );
};
export default Home;
