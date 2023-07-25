import s from "./page.module.scss";
import CustomAppsSection from "../sections/service_page/CustomAppsSection";
import DevelopmentSection from "../sections/service_page/DevelopmentSection";

const Services = () => {
  return (
    <div>
      <p>Services</p>
      <DevelopmentSection />
      <CustomAppsSection />
    </div>
  );
};

export default Services;
