import React from "react";
import s from "./page.module.scss";
import DesignSection from "../sections/service_page/DesignSection";
import CustomAppsSection from "../sections/service_page/CustomAppsSection";
import DevelopmentSection from "../sections/service_page/DevelopmentSection";
import SecuritySection from "../sections/service_page/SecuritySection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";

import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";

export async function generateMetadata({}) {
  return { title: "SoftLion | Services" };
}

const Services = () => {
  useGoogleAnalytics();

  const links = [{ title: "Services", href: "#" }];

  return (
    <div>
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
