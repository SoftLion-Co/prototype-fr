import React from "react";
import PrivacyPolicySection from "../sections/privacy_policy_page/PrivacyPolicySection";
import InfoNavigationComponent from "../../components/InfoNavigationComponent";

import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";

export async function generateMetadata({}) {
  return { title: "SoftLion | Privacy Policy" };
}

const PrivacyPolicy = () => {
  useGoogleAnalytics();

  const links = [{ title: " Privacy Policy", href: "#" }];

  return (
    <React.Fragment>
      <InfoNavigationComponent links={links} />
      <PrivacyPolicySection />
    </React.Fragment>
  );
};

export default PrivacyPolicy;
