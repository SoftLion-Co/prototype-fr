import React from "react";
import PrivacyPolicySection from "../sections/privacy_policy_page/PrivacyPolicySection";
import InfoNavigationComponent from "../../components/InfoNavigationComponent";
export async function generateMetadata({}) {
  return { title: "SoftLion | Privacy Policy" };
}

const PrivacyPolicy = () => {
  const links = [{ title: " Privacy Policy", href: "#" }];

  return (
    <div>
      <InfoNavigationComponent links={links} />
      <PrivacyPolicySection />
    </div>
  );
};

export default PrivacyPolicy;
