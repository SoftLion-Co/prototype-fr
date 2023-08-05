import s from "./page.module.scss";
import DesignSection from "../sections/service_page/DesignSection";
import CustomAppsSection from "../sections/service_page/CustomAppsSection";
import DevelopmentSection from "../sections/service_page/DevelopmentSection";
import SecuritySection from "../sections/service_page/SecuritySection";

const Services = () => {
  return (
    <div>
     <DesignSection />
     <DevelopmentSection/>
     <CustomAppsSection/>
     <SecuritySection />
    </div>
  );
};

export default Services;
