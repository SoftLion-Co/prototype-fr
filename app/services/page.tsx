import s from "./page.module.scss";
import DesignSection from "../sections/service_page/DesignSection";
import CustomAppsSection from "../sections/service_page/CustomAppsSection";
import DevelopmentSection from "../sections/service_page/DevelopmentSection";
import SecuritySection from "../sections/service_page/SecuritySection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";

const Services = () => {
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
      <SecuritySection />
    </div>
  );
};

export default Services;
