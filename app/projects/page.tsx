"use client";

import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import OurProjectsSection from "../sections/projects_page/OurProjectsSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";

const Projects = () => {
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

  const links = [{ title: "Projects", href: "/projects" }];

  return (
    <div>
      <Helmet key={window.location.pathname}>
        <title>SoftLion | Our Projects</title>
      </Helmet>

      <InfoNavigationComponent links={links} />
      <OurProjectsSection />
    </div>
  );
};

export default Projects;
