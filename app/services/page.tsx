import React from "react";
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
    <React.Fragment>
      <InfoNavigationComponent links={links} />
      <DesignSection anchorID="design" />
      <DevelopmentSection anchorID="development" />
      <CustomAppsSection anchorID="apps" />
      <SecuritySection anchorID="security" />
    </React.Fragment>
  );
};

export default Services;
