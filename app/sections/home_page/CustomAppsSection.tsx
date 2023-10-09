import s from "./CustomAppsSection.module.scss";
import CustomAppsCardComponent from "@/components/services/CustomAppsCardComponent";
import TitleServicesComponent from "@/components/services/TitleServicesComponent";
import pic from "../../../images/services/custom-apps/Apps.svg";
import pic2 from "../../../images/services/custom-apps/CustomAppDevelopment.svg";
import SeeMoreButtonComponent from "@/components/SeeMoreButtonComponent";
import classNames from "classnames";

const CustomAppsSection = () => {
  return (
    <div className={classNames(s.container, s.custom)}>
      <div className={s.custom__title}>
        <TitleServicesComponent
          num="02"
          text="Custom Apps"
          position="right"
          color="purple"
        />
      </div>
      <div className={s.custom__cards}>
        <CustomAppsCardComponent
          title="Apps"
          path={pic}
          text="App development is the process of creating software applications for mobile and desktop devices. It involves designing, developing, testing, and deploying apps that meet the needs of users. App developers use a variety of programming languages and tools to create apps for different platforms, such as iOS, Android, and Windows. App development is a complex and challenging process, but it is also very rewarding. By creating innovative and user-friendly apps, app developers can make a real difference in the lives of people around the world."
          arrow={false}
        />
        <CustomAppsCardComponent
          title="Custom App Development"
          path={pic2}
          text="App development is the process of creating software applications for mobile and desktop devices. It begins with gathering requirements and analyzing user needs to ensure that the app meets the needs of its target audience. Developers then create the user interface design and develop the software architecture, which is the blueprint for how the app will work. Once the architecture is in place, developers proceed to programming, using various programming languages and frameworks to implement the app's functionality."
          arrow={false}
        />
      </div>
      <div className={s.blur}>
        <div className={s.blur_item}></div>
      </div>
      <div className={s.custom__more}>
        <SeeMoreButtonComponent path="services" />
      </div>
    </div>
  );
};

export default CustomAppsSection;
