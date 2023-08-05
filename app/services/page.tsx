import s from "./page.module.scss";
import DesignSection from "../sections/service_page/DesignSection";
import CustomAppsSection from "../sections/service_page/CustomAppsSection";
import SecuritySection from "../sections/service_page/SecuritySection";

const Services = () => {
  return (
    <div>
      <DesignSection />
      <CustomAppsSection />
      <SecuritySection />
    </div>
  );
};

export default Services;
