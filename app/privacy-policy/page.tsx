import React from "react";
import PrivacyPolicySection from "../sections/privacy_policy_page/PrivacyPolicySection";
import InfoNavigationComponent from "../../components/InfoNavigationComponent";
import UseClientComponent from "@/hooks/useClientComponent";

const PrivacyPolicy = () => {
  const links = [{ title: " Privacy Policy", href: "#" }];
  const title = "Privacy Policy";

  return (
    <div>
      <UseClientComponent title={title} />;
      <InfoNavigationComponent links={links} />
      <PrivacyPolicySection />
    </div>
  );
};

export default PrivacyPolicy;
