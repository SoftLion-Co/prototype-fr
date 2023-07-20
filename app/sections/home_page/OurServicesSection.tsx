import s from "./OurServicesSection.module.scss";
import HeadingComponent from "@/components/HeadingComponent";
import CustomAppsSection from "./sections/service_page/CustomAppsSection";
import TitleServicesComponent from "@/components/services/TitleServicesComponent";
import ServiceCardsComponent from "@/components/services/ServiceCardsComponent";
import pic from "../../../images/services/custom-apps/Apps.svg"
import pic2 from "../../../images/services/custom-apps/CustomAppDevelopment.svg"

const OurServicesSection = () => {
  return (
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
      <div className={s.CustumApps}>
        <div className={s.CustumApps__title}>
        <TitleServicesComponent
          num="02"
          text={"Custum Apps"}
        />
        </div>
        <div className={s.CustumApps__card}>
        <ServiceCardsComponent
          title="Apps"
          path={pic}
          text_mob="App development is the creation of software for devices like smartphones, tablets, and computers. It involves building tools that perform tasks and provide users with capabilities. Apps are developed for platforms like iOS, Android, and Windows. This process includes UI design, programming, testing, debugging, and post-release support. App development is crucial for technology, enabling innovative solutions to meet user needs.
        "
          text="App development is the process of creating software for various devices, such as smartphones, tablets, computers, and others. This development involves building functional tools that perform specific tasks or provide users with certain capabilities. Apps can be developed for different platforms, such as iOS, Android, Windows, and many others. This process includes user interface design, functionality programming, testing, debugging, and post-release support of the software product. App development is an essential component of the modern technology world, enabling the creation of innovative solutions to address various tasks and meet user needs.
        "
          arrow={true}
        />
        <div className={s.CustumApps__card2}>
          <ServiceCardsComponent
          title="Custom App Development"
          path={pic2}
          text_mob="App development begins with gathering requirements and analyzing user needs. Developers create the UI design and software architecture. They program using various languages and frameworks. Testing ensures functionality and identifies errors. After testing, the app is released through stores or direct installation. Developers provide support and updates to improve functionality and fix bugs post-release."
          text="The process of app development begins with gathering requirements and analyzing user needs. Developers then create the user interface design and develop the software architecture. They proceed to programming, using various programming languages and frameworks to implement the app's functionality. After writing the code, testing is conducted to ensure the app works correctly and to identify any errors. Once testing is successfully completed, the app is ready for release. It can be distributed through app stores or installed directly on users' devices. Additionally, developers provide support and release updates to improve functionality and fix any bugs after the app's release."
          arrow={true}
        /></div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection;
