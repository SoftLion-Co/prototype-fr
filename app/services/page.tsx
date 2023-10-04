"use client";

import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import s from "./page.module.scss";
import DesignSection from "../sections/service_page/DesignSection";
import CustomAppsSection from "../sections/service_page/CustomAppsSection";
import DevelopmentSection from "../sections/service_page/DevelopmentSection";
import SecuritySection from "../sections/service_page/SecuritySection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";

const Services = () => {
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

  const links = [{ title: "Services", href: "#" }];

  return (
    <div>
      <Helmet key={window.location.pathname}>
        <title>SoftLion | Services</title>
      </Helmet>

      <InfoNavigationComponent links={links} />
      <div id="design">
        <DesignSection />
      </div>
      <div id="development">
        <DevelopmentSection />
      </div>
      <div id="apps">
        <CustomAppsSection />
      </div>
      <div id="security">
        <SecuritySection />
      </div>
    </div>
  );
};

export default Services;
