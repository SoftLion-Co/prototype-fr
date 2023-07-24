import s from "./page.module.scss";
import CustomAppsSection from "../sections/service_page/CustomAppsSection";

import CustomAppsCardComponent from "@/components/services/CustomAppsCardComponent";


const Services = () => {
  return (
    <div className="container">
      <p>Services</p>
     <CustomAppsSection/>
    </div>
  );
};

export default Services;
