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
        text="App development is the creation of software for devices like smartphones, tablets, and computers. It involves building tools that perform tasks and provide users with capabilities. Apps are developed for platforms like iOS, Android, and Windows. This process includes UI design, programming, testing, debugging, and post-release support. App development is crucial for technology, enabling innovative solutions to meet user needs.
"
arrow={true}
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
