import React from "react";
import s from "./CustomAppsSection.module.scss";
import CustomAppsCardComponent from "@/components/services/CustomAppsCardComponent";
import TitleServicesComponent from "@/components/services/TitleServicesComponent";
import pic from "../../../images/services/custom-apps/Apps.svg";
import pic2 from "../../../images/services/custom-apps/CustomAppDevelopment.svg";
import SeeMoreButtonComponent from "@/components/SeeMoreButtonComponent";
import MotionWrapper from "@/hooks/MotionWrapper";

const CustomAppsSection = () => {
  return (
    <React.Fragment>
      <TitleServicesComponent
        num="02"
        text="Custom Apps"
        position="right"
        color="purple"
      />
      <MotionWrapper
        tag="div"
        initial
        viewport
        variants
        custom={2}
        className={s.custom__cards}
      >
        <CustomAppsCardComponent
          title="Web-Studio"
          path={pic}
          text="In the realm of digital innovation, app development is fundamental, shaping our interactions on mobile and desktop platforms. This process involves crafting software applications to meet diverse user needs. SoftLion excels not only in app development but also offers a range of web solutions. From mobile apps to responsive websites, we specialize in creating captivating digital experiences. Partner with us to realize your ideas and make a lasting impact online."
          arrow={false}
        />
        <CustomAppsCardComponent
          title="Custom App Development"
          path={pic2}
          text="App development is the process of creating software applications for mobile and desktop devices. It begins with gathering requirements and analyzing user needs to ensure that the app meets the needs of its target audience. Developers then create the user interface design and develop the software architecture, which is the blueprint for how the app will work. Once the architecture is in place, developers proceed to programming, using various programming languages and frameworks to implement the app's functionality."
          arrow={false}
        />
      </MotionWrapper>

      <SeeMoreButtonComponent path="services" />
    </React.Fragment>
  );
};

export default CustomAppsSection;
