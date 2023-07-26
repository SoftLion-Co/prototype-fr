import s from "./page.module.scss";
import DesignSection from "../sections/service_page/DesignSection";
import CustomAppsSection from "../sections/service_page/CustomAppsSection";

import CustomAppsCardComponent from "@/components/services/CustomAppsCardComponent";


const Services = () => {
  return (
    <div>
      <DesignSection />
     <CustomAppsSection/>
    </div>
  );
};

export default Services;
