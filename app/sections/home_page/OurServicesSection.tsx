import s from "./OurServicesSection.module.scss";
import EcommerceSection from "./EcommerceSection";
import CustomAppsSection from "./CustomAppsSection";
import WorkWithCustomersSection from "./WorkWithCustomersSection";
import OurServicesHeadingComponent from "@/components/services/OurServicesHeadingComponent";
import MotionWrapper from "@/hooks/MotionWrapper";

const OurServicesSection = () => {
  return (
    <MotionWrapper tag="section" className={s.container}>
      <OurServicesHeadingComponent />
      <EcommerceSection />
      <CustomAppsSection />
      <WorkWithCustomersSection />
    </MotionWrapper>
  );
};

export default OurServicesSection;
