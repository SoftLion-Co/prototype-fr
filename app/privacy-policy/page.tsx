import PrivacyPolicySection from "../sections/privacy_policy_page/PrivacyPolicySection";
import InfoNavigationComponent from "../../components/InfoNavigationComponent";
import s from "./page.module.scss";

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
