import React, { FC } from "react";
import s from "./CustomAppsSection.module.scss";
import CustomAppsCardComponent from "@/components/services/CustomAppsCardComponent";
import pic from "../../../images/services/custom-apps/Apps.svg";
import pic2 from "../../../images/services/custom-apps/CustomAppDevelopment.svg";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";
import classNames from "classnames";
import MotionWrapper from "@/hooks/MotionWrapper";

interface AnchorID {
  anchorID: string;
}

const CustomAppsSection: FC<AnchorID> = ({ anchorID }) => {
  return (
    <section id={anchorID} className={classNames(s.container, s.custom)}>
      <ServiceHeadingComponent
        className={s.custom__title}
        headingText={"Custom Apps"}
      />

      <MotionWrapper
        tag="div"
        initial
        viewport
        variants
        custom={2}
        className={s.custom__cards}
      >
        <div className={s.custom__card}>
          <CustomAppsCardComponent
            title="Web-Studio"
            path={pic}
            text="In the realm of digital innovation, app development is fundamental, shaping our interactions on mobile and desktop platforms. This process involves crafting software applications to meet diverse user needs. SoftLion excels not only in app development but also offers a range of web solutions. From mobile apps to responsive websites, we specialize in creating captivating digital experiences. Partner with us to realize your ideas and make a lasting impact online."
            arrow={false}
          />
        </div>

        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>

        <div className={s.custom__card2}>
          <CustomAppsCardComponent
            title="Custom App Development"
            path={pic2}
            text="App development is the process of creating software applications for mobile and desktop devices. It begins with gathering requirements and analyzing user needs to ensure that the app meets the needs of its target audience. Developers then create the user interface design and develop the software architecture, which is the blueprint for how the app will work. Once the architecture is in place, developers proceed to programming, using various programming languages and frameworks to implement the app's functionality."
            arrow={false}
          />
        </div>
      </MotionWrapper>
    </section>
  );
};

export default CustomAppsSection;
