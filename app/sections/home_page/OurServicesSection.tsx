import s from "./OurServicesSection.module.scss";
import HeadingComponent from "@/components/HeadingComponent";
import CustomAppsSection from "./CustomAppsSection";
import TitleServicesComponent from "@/components/services/TitleServicesComponent";
import ServiceCardsComponent from "@/components/services/ServiceCardsComponent";
import pic from "../../../images/services/custom-apps/Apps.svg";
import pic2 from "../../../images/services/custom-apps/CustomAppDevelopment.svg";
import CustomAppsCardComponent from "@/components/services/CustomAppsCardComponent";
import OurServicesHeadingComponent from "@/components/services/OurServicesHeadingComponent";

const OurServicesSection = () => {
  return (
    <div className={s.services}>
      <OurServicesHeadingComponent />
      <CustomAppsSection />
    </div>
  );
};

export default OurServicesSection;
