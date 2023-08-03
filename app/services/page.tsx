import s from "./page.module.scss";
import CustomAppsSection from "../sections/service_page/CustomAppsSection";
import DevelopmentSection from "../sections/service_page/DevelopmentSection";
import SecuritySection from "../sections/service_page/SecuritySection";

const Services = () => {
  return (
    <div>
     <DevelopmentSection/>
     <CustomAppsSection/>
     <SecuritySection />
    </div>
  );
};

export default Services;
