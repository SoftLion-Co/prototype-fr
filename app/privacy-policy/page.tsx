"use client";

import React, { useEffect } from "react";
import PrivacyPolicySection from "../sections/privacy_policy_page/PrivacyPolicySection";
import InfoNavigationComponent from "../../components/InfoNavigationComponent";

const PrivacyPolicy = () => {
  const links = [{ title: " Privacy Policy", href: "#" }];

  useEffect(() => {
    // Set document title
    document.title = "SoftLion | Privacy policy";
  });

  return (
    <div>
      <InfoNavigationComponent links={links} />
      <PrivacyPolicySection />
    </div>
  );
};

export default PrivacyPolicy;
