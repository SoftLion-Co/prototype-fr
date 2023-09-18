import s from "./OurServicesSection.module.scss";
import EcommerceSection from "./EcommerceSection";
import CustomAppsSection from "./CustomAppsSection";
import WorkWithCustomersSection from "./WorkWithCustomersSection";
import OurServicesHeadingComponent from "@/components/services/OurServicesHeadingComponent";

const OurServicesSection = () => {
  return (
    <section className={s.services}>
      <OurServicesHeadingComponent />
      <EcommerceSection />
      <CustomAppsSection />
      <WorkWithCustomersSection />
    </section>
  );
};

export default OurServicesSection;
