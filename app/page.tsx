import Link from "next/link";
import CustomAppsSection from "./sections/service_page/CustomAppsSection";
import TitleServicesComponent from "@/components/services/TitleServicesComponent";
import ServiceCardsComponent from "@/components/services/ServiceCardsComponent";
import pic from "../images/services/custom-apps/Apps.svg"

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <TitleServicesComponent num="02" text={"Custum Apps"} className="TitleServicesComponent" />
      <ServiceCardsComponent
        title="Apps"
        path={pic}
        text="App development is the process of creating software for various devices, such as smartphones, tablets, computers, and others. This development involves building functional tools that perform specific tasks or provide users with certain capabilities. Apps can be developed for different platforms, such as iOS, Android, Windows, and many others. This process includes user interface design, functionality programming, testing, debugging, and post-release support of the software product. App development is an essential component of the modern technology world, enabling the creation of innovative solutions to address various tasks and meet user needs.
        "
arrow="true"
      />
      {/* <CustomAppsSection /> */}
      <Link href="/blogs">
        <h2>Blog</h2>
      </Link>
      <Link href="/projects">
        <h2>Projects</h2>
      </Link>
      <Link href="/services">
        <h2>Services</h2>
      </Link>
    </div>
  );
};

export default Home;
