import s from "./page.module.scss";
import CustomAppsSection from "../sections/service_page/CustomAppsSection";

import DevelopmentSection from "../sections/service_page/DevelopmentSection";

import CustomAppsCardComponent from "@/components/services/CustomAppsCardComponent";
import SecuritySection from "../sections/service_page/SecuritySection";



const Services = () => {
  return (
    <div>

     <CustomAppsSection/>
     <SecuritySection />

    </div>
  );
};

export default Services;
