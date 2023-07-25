import s from "./OurServicesSection.module.scss";
import HeadingComponent from "@/components/HeadingComponent";
import CustomAppsSection from "./CustomAppsSection";
import TitleServicesComponent from "@/components/services/TitleServicesComponent";
import ServiceCardsComponent from "@/components/services/ServiceCardsComponent";
import pic from "../../../images/services/custom-apps/Apps.svg";
import pic2 from "../../../images/services/custom-apps/CustomAppDevelopment.svg";
import CustomAppsCardComponent from "@/components/services/CustomAppsCardComponent";

const OurServicesSection = () => {
  return (
    <div className={s.container}>
    <div className={s.services}>
      <div className={s.services__title}>
        <HeadingComponent text="Our Services" />
      </div>
      <p className={s.services__text}>
        Our services encompass the entire development cycle, starting from
        requirements analysis and interface design to programming, testing, and
        deployment. We work with various technologies and platforms such as
        HTML/CSS, JavaScript, PHP, Python, iOS, Android, and many others to
        ensure the development of websites and apps that meet all the needs and
        requirements of our clients.
      </p>
      <CustomAppsSection/>
      </div>
    </div>
  );
};

export default OurServicesSection;
